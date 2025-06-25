import { db } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {

    const post = await db.post.findUnique({
        where: {
            id: parseInt(params.id)
        },
        include: {
            author: true, category: true, tags: true, comments: true
        }
    }
        
    )
    if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
}

export async function PUT(request, { params }) { 
    const { title, content, authorId, categoryId, tags } = await request.json();
    const updatedPost = db.post.update({
        where: {
            id: parseInt(params.id)
        },
        data: {
            title,
            content,
            authorId,
            categoryId
        },
        include: {
            author: true, category: true, tags: true
        }
    });
    return NextResponse.json(updatedPost);


}

export async function DELETE(request, { params }) { 
    await db.post.delete({
        where: {
            id: parseInt(params.id)
        }
    });
    return NextResponse.json({ message: "Post deleted" });

}