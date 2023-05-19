import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


async function dbInit() {
  const db = await open({
    filename: './feedback.sqlite',
    driver: sqlite3.Database,
  });
  await db.migrate({ migrationsPath: './sql' });
  return db;
}

const dbConn = dbInit();

export async function insertFeedback(feedback) {
  const db = await dbConn;
  db.run('INSERT INTO feedback VALUES (?,?,?)', [ feedback.email, feedback.site, feedback.feedback]);
}

export async function getAll(){
  const db = await dbConn;

  return await db.all('SELECT * FROM feedback');
}
