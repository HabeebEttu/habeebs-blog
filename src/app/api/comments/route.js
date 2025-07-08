import { db } from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { content, postId, authorName } = await request.json();

    if (!content || !postId) {
        return NextResponse.json({ error: "Content and postId are required." }, { status: 400 });
    }

    try {
        let authorId;
        // Find or create an anonymous user
        let anonymousUser = await db.user.findUnique({
            where: { email: "anonymous@example.com" },
        });

        if (!anonymousUser) {
            anonymousUser = await db.user.create({
                data: {
                    name: "Anonymous",
                    email: "anonymous@example.com",
                    // You might want to set a default password or handle this differently
                    // password: "", 
                },
            });
        }
        authorId = anonymousUser.id;

        const newComment = await db.comment.create({
            data: {
                content,
                postId: parseInt(postId),
                authorId: authorId,
                // Optionally store the provided authorName if you want to display it
                // and differentiate from the generic "Anonymous" user name
                // This would require adding a 'displayName' field to your Comment model
            },
            include: {
                author: true, // Include author to return their name
            },
        });
        return NextResponse.json(newComment, { status: 201 });
    } catch (error) {
        console.error("Error creating comment:", error);
        return NextResponse.json({ error: "An unexpected error occurred while creating the comment." }, { status: 500 });
    }
}
