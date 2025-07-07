
import { db } from "@/app/db";
import { NextResponse } from "next/server";
import { pusher } from '@/lib/pusher';

export const GET = async (request, { params }) => {
  const { id } = await params;

    try {
      if(isNaN(parseInt(id))){

      
        const post = await db.post.findUnique({
          where: { slug: id },
          include: {
            author: true,
            category: true,
            tags: true,
            comments: true,
          },
        });
        if (!post) {
          return NextResponse.json(
            { error: "Post not found" },
            { status: 404 }
          );
        }

        return NextResponse.json(post);
}else{
    const post = await db.post.findUnique({
      where: { id:parseInt(id) },
      include: {
        author: true,
        category: true,
        tags: true,
        comments: true,
      },
    });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);      
}
    
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
    const { id } = await params;

    try {
        const post = await db.post.delete({
            where: { id },
        });

        await pusher.trigger('posts-channel', 'post-deleted', { id });

        return NextResponse.json(post);
    } catch (error) {
        console.error("Error deleting post:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
};

export const PUT = async (request, { params }) => {
    const id = parseInt(await params.id);
    console.log("PUT request received for post ID/slug:", id);
    const body = await request.json();
    console.log("Request body:", body);
    const { title, content, category, tags, featuredImage } = body;

    try {
        const updatedPost = await db.post.update({
            where: { id: id }, // Assuming 'id' from params is the database ID
            data: {
                title,
                content,
                coverImage: featuredImage,
                category: {
                    connectOrCreate: {
                        where: { name: category },
                        create: { name: category },
                    },
                },
                tags: {
                    set: [], // Clear existing tags
                    connectOrCreate: tags.split(',').map(name => name.trim()).filter(Boolean).map(name => ({
                        where: { name },
                        create: { name },
                    })),
                },
            },
        });
        console.log("Post updated successfully:", updatedPost.id);
        return NextResponse.json(updatedPost);
    } catch (error) {
        return NextResponse.json({ error: error.message || "An unexpected error occurred", fullError: JSON.stringify(error, Object.getOwnPropertyNames(error)) }, { status: 500 });
    }
};
