import { db } from "@/lib/db";


export async function GET(request) {
    // Return all posts
    const [rows] = await db.query('SELECT * FROM posts');
  return Response.json(rows);
}
export async function POST(req){
    const body = await req.json();
  const { title, content, tags, imageUrl, categories } = body;
  const author = 'admin';
  const tagsString = tags.join(',');
  const categoriesString = categories.join(',');
  const slug = title.toLowerCase().replace(/\s+/g, '-');
    const [result] = await db.query(
      'INSERT INTO posts (post_title,content,author,tags,imageUrl,categories,slug) VALUES (?,?,?,?,?,?,?)',
      [title, content,author, tagsString, imageUrl, categoriesString,slug]
    );
    return Response.json(result);
}
