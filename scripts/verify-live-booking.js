const { Client } = require("pg");

async function verifyLiveBooking() {
  const client = new Client({
    host: "aws-0-ap-south-1.pooler.supabase.com",
    user: "postgres.cshyncmssaileubzohfw",
    password: "J*xpM5G*264y/uZ",
    database: "postgres",
    port: 5432,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  const res = await client.query(
    "SELECT id, booking_id, name, phone, pickup_location, drop_location, status, created_at FROM public.bookings ORDER BY created_at DESC LIMIT 5"
  );
  console.log("Recent Bookings in Supabase:");
  console.table(res.rows);
  await client.end();
}

verifyLiveBooking();
