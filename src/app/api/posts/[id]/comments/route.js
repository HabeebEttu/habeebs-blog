import { db } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const postId = parseInt(await params.id);

    try {
        const comments = await db.comment.findMany({
            where: { postId },
            include: {
                author: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json({ error: "An unexpected error occurred while fetching comments." }, { status: 500 });
    }
};
