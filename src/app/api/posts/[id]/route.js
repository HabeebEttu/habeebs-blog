import { pusher } from '@/lib/pusher';
import { db } from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;
    const numericId = parseInt(id, 10);

    let post;

    if (!isNaN(numericId)) {
        post = await db.post.findUnique({
            where: { id: numericId },
            include: { author: true, category: true, tags: true, comments: true },
        });
    }

    if (!post) {
        post = await db.post.findUnique({
            where: { slug: id },
            include: { author: true, category: true, tags: true, comments: true },
        });
    }

    if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
}

export async function PUT(request, { params }) {
    const { title, content, category, tags, featuredImage } =
      await request.json();

    const categoryRecord = await db.category.findUnique({
        where: { name: category },
    });

    if (!categoryRecord) {
        return NextResponse.json({ error: "Category not found" }, { status: 400 });
    }

    const tagRecords = await Promise.all(
        tags.split(',').map(async (tagName) => {
            const name = tagName.trim()
            let tag = await db.tag.findUnique({ where: { name } });
            if (!tag) {
                tag = await db.tag.create({ data: { name } });
            }
            return tag;
        })
    );
    const {id} = await params;
    const updatedPost = await db.post.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            content,
            categoryId: categoryRecord.id,
            coverImage:featuredImage,
            tags: {
                set: tagRecords.map(tag => ({ id: tag.id }))
            }
        },
        include: {
            author: true, category: true, tags: true
        }
    });
    await pusher.trigger('posts-channel', 'post-updated', { post: updatedPost });
    return NextResponse.json(updatedPost);
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    try {
        const post = await db.post.findUnique({
            where: {
                slug: id,
            },
        });

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        await db.post.delete({
            where: {
                id: post.id,
            },
        });

        await pusher.trigger('posts-channel', 'post-deleted', { id: post.id });

        return NextResponse.json({ message: "Post deleted" });
    } catch (error) {
        console.error("Error deleting post:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}