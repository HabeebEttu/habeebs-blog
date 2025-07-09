import { db } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const {id} = await params

   

    const category = await db.category.findFirst({
        where: {
            id:parseInt(id)
        }, include: {
            posts: true,
            _count: true,
            
        }
    });

    if (!category) {
        return new NextResponse("Category not found", { status: 404 });
    }

    return NextResponse.json(category);
}