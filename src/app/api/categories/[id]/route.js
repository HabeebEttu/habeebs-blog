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
    return NextResponse.json(category);
}