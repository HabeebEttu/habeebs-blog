import { db } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const categories = await db.category.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            _count: {
                select: {
                    posts: true
                }
            },
        },
    });
    return NextResponse.json(categories);
}

