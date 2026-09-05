const { Client } = require("pg");

const regions = [
  "ap-south-1",
  "ap-southeast-1",
  "ap-northeast-2",
  "ap-northeast-1",
  "us-east-1",
  "us-west-1",
  "eu-central-1",
  "eu-west-1",
];

const projectRef = "cshyncmssaileubzohfw";
const user = `postgres.${projectRef}`;
const password = "J*xpM5G*264y/uZ";
const database = "postgres";
const port = 6543; // transaction pooler port or 5432 session pooler

async function findPooler() {
  for (const region of regions) {
    const host = `aws-0-${region}.pooler.supabase.com`;
    console.log(`Trying pooler: ${host}:${port}...`);
    const client = new Client({
      host,
      user,
      password,
      database,
      port,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 5000,
    });

    try {
      await client.connect();
      console.log(`🎉 Connected successfully via pooler: ${host}!`);
      const res = await client.query("SELECT version();");
      console.log("DB version:", res.rows[0].version);
      await client.end();
      return { host, region, port };
    } catch (err) {
      console.log(`Failed for ${region}: ${err.message}`);
      try { await client.end(); } catch (e) {}
    }
  }
}

findPooler();
