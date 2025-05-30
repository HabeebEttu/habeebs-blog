import mysql from 'mysql2/promise';

export const db = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "blogdb",
  waitForConnections: true,
  connectionLimit: 10,
});