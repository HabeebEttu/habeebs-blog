import { db } from "@/lib/db";

export async function GET(req, res) {
    const {id} = await res.params;
    const idInt= parseInt(id)
    const [post] = await db.query('SELECT * FROM posts WHERE post_id = ?', [idInt])
    return Response.json(post)
}