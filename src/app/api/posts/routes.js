import { db } from "@/lib/db";


export async function GET(request) {
    // Return all posts
    const [rows] = await db.query('SELECT * FROM posts');
  return Response.json(rows);
}
export async function POST(req){
    const body = await req.json();
    const {title,content,author,publishDate,tags,imageUrl,categories} = body;
    const [result] = await db.query('INSERT INTO posts (title,content,author,publishDate,tags,imageUrl,categories) VALUES (?,?,?,?,?,?,?)',[title,content,author,publishDate,tags,imageUrl,categories]);
    return Response.json(result);
}
