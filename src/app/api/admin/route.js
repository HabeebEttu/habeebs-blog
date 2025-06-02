export async function GET(req , res) {
     const [rows] = await db.query('SELECT admin_username FROM admin_user');
  return Response.json(rows);
}