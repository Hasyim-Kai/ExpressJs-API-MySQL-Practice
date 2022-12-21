const mysql = require('mysql2/promise');

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "express_api",
}

export async function db_query(sql: string, params: any = []) {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const [data] = await connection.query(sql, params);
    return data;
  } catch (error) {
    return error;
  } finally {
    connection.end()
  }
}