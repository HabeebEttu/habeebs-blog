import { db } from "@/app/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

// Helper function to generate a unique slug
const generateSlug = async (title, attempt = 0) => {
  let slug = title
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .replace(/[^\w\-]+/g, '') 
    .replace(/\-\-+/g, '-') 
    .replace(/^-+/, '') 
    .replace(/-+$/, '');

  if (attempt > 0) {
    slug = `${slug}-${attempt}`;
  }

  const existingPost = await db.post.findUnique({
    where: { slug },
  });

  if (existingPost) {
    return generateSlug(title, attempt + 1);
  }

  return slug;
};


export const GET = async (request) => {
    const posts = await db.post.findMany({
      include: {
        author: true,
        category: true,
        tags: true,
        comments: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts, )
}
 
export async function POST(request) {
    console.log("Received request to create post.");
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        console.log("Authentication failed: No session or user.");
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    console.log("User authenticated:", session.user.id);

    const body = await request.json();
    console.log("Request body:", body);
    const { title, content, category, tags, featuredImage } = body;

    if (!title || !content || !category) {
        console.log("Validation failed: Missing required fields.");
        return NextResponse.json({ error: "Title, content, and category are required." }, { status: 400 });
    }

    const authorId = session.user.id;
    if (!authorId) {
        console.log("Authentication error: User ID not found in session.");
        return NextResponse.json({ error: "User ID not found in session." }, { status: 401 });
    }

    const slug = await generateSlug(title);
    console.log("Generated slug:", slug);

    const tagNames = tags ? tags.split(',').map(tag => tag.trim()).filter(Boolean) : [];
    console.log("Processing tags:", tagNames);

    try {
        console.log("Attempting to create post in database...");
        const newPost = await db.post.create({
            data: {
                title,
                slug,
                content,
                coverImage: featuredImage,
                published: true,
                author: {
                    connect: { id: authorId },
                },
                category: {
                    connectOrCreate: {
                        where: { name: category },
                        create: { name: category },
                    },
                },
                tags: {
                    connectOrCreate: tagNames.map(name => ({
                        where: { name },
                        create: { name },
                    })),
                },
            },
            include: {
                category: true,
                tags: true,
                author: true,
            }
        });
        console.log("Post created successfully:", newPost.id);
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error("Failed to create post:", error.message);
        return NextResponse.json({ error: "An unexpected error occurred while creating the post." }, { status: 500 });
    }
}