const { Client } = require("pg");

async function testCrud() {
  const client = new Client({
    host: "aws-0-ap-south-1.pooler.supabase.com",
    user: "postgres.cshyncmssaileubzohfw",
    password: "J*xpM5G*264y/uZ",
    database: "postgres",
    port: 5432,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  console.log("Connected to Supabase PostgreSQL!");

  // Insert test booking
  const testId = "TEST-" + Math.floor(Math.random() * 10000);
  const insertRes = await client.query(
    `INSERT INTO public.bookings 
     (booking_id, name, phone, pickup_location, travel_date, service_type, status) 
     VALUES ($1, $2, $3, $4, NOW(), $5, $6) 
     RETURNING id, booking_id, name, status`,
    [testId, "Amit Sharma (Test)", "9876543210", "Civil Lines, Kanpur", "Local Rental", "new"]
  );

  console.log("✅ Inserted booking:", insertRes.rows[0]);

  // Read bookings
  const countRes = await client.query("SELECT count(*) FROM public.bookings");
  console.log("✅ Total bookings in database:", countRes.rows[0].count);

  // Clean up test booking
  await client.query("DELETE FROM public.bookings WHERE booking_id = $1", [testId]);
  console.log("✅ Cleaned up test booking");

  await client.end();
  console.log("🎉 Supabase CRUD test passed with 100% success!");
}

testCrud().catch(console.error);
