import { db } from "@/app/db"
import { NextResponse } from "next/server";

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
    const { title, content, slug, authorId, categoryId, tagIds } = await request.json();

    const newPost = await db.post.create({
        data: {
            title,
            content,
            slug,
            author: { connect: { id: authorId } },
            category: { connect: { id: categoryId } },
            tags: { connect: tagIds.map((id) => ({ id })) },
            published: true,
        }
    })
    return NextResponse.json(newPost,{status:201})

}