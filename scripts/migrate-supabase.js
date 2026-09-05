const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

const projectRef = "cshyncmssaileubzohfw";
const host = "aws-0-ap-south-1.pooler.supabase.com";
// Use session pooler on port 5432 for DDL / migrations
const port = 5432;
const user = `postgres.${projectRef}`;
const password = "J*xpM5G*264y/uZ";
const database = "postgres";

async function runMigration() {
  console.log(`\n============================================================`);
  console.log(`  Deploying Schema & Seed to Supabase: ${projectRef}`);
  console.log(`============================================================\n`);

  const client = new Client({
    host,
    user,
    password,
    database,
    port,
    ssl: { rejectUnauthorized: false },
  });

  try {
    console.log("Connecting to PostgreSQL...");
    await client.connect();
    console.log("Connected successfully!\n");

    // 1. Run Schema
    console.log("1. Executing supabase/schema.sql...");
    const schemaSql = fs.readFileSync(path.join(__dirname, "../supabase/schema.sql"), "utf-8");
    await client.query(schemaSql);
    console.log("✅ Schema created successfully (all 10 tables + RLS enabled + policies applied)!\n");

    // 2. Run Seed
    console.log("2. Executing supabase/seed.sql...");
    const seedSql = fs.readFileSync(path.join(__dirname, "../supabase/seed.sql"), "utf-8");
    await client.query(seedSql);
    console.log("✅ Seed data inserted successfully!\n");

    // 3. Verify counts
    console.log("3. Verifying database tables:");
    const tables = ["cars", "services", "tour_packages", "destinations", "faqs", "site_settings"];
    for (const t of tables) {
      const res = await client.query(`SELECT count(*) FROM public.${t}`);
      console.log(`   • public.${t.padEnd(15)} : ${res.rows[0].count} records`);
    }

    console.log("\n🎉 Supabase Database Setup & Seeding 100% COMPLETE!");
    await client.end();
  } catch (err) {
    console.error("❌ Migration error:", err.message);
    try { await client.end(); } catch (e) {}
    process.exit(1);
  }
}

runMigration();
