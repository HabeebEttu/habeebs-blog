import { db } from "@/app/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const categories = await db.category.findMany();
    return NextResponse.json(categories);
}
