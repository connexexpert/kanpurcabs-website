import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres.cshyncmssaileubzohfw:J*xpM5G*264y%2FuZ@aws-0-ap-south-1.pooler.supabase.com:6543/postgres?sslmode=require";

declare global {
  // eslint-disable-next-line no-var
  var dbPool: Pool | undefined;
}

export const pool =
  global.dbPool ||
  new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
  });

if (process.env.NODE_ENV !== "production") {
  global.dbPool = pool;
}

export async function query(text: string, params?: any[]) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  if (process.env.NODE_ENV !== "production") {
    console.log("executed query", { text, duration, rows: res.rowCount });
  }
  return res;
}

export default pool;
