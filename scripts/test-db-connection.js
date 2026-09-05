const { Client } = require("pg");

async function testConnection() {
  const host = "db.cshyncmssaileubzohfw.supabase.co";
  const user = "postgres";
  const password = "J*xpM5G*264y/uZ";
  const database = "postgres";
  const port = 5432;

  console.log(`Connecting to ${host}:${port}...`);
  const client = new Client({
    host,
    user,
    password,
    database,
    port,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000,
  });

  try {
    await client.connect();
    console.log("✅ Successfully connected to Supabase PostgreSQL database!");
    const res = await client.query("SELECT version(), current_database(), current_user;");
    console.log("DB info:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("❌ Direct connection failed:", err.message);
    console.log("Trying connection poolers...");
  }
}

testConnection();
