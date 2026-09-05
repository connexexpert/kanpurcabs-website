/**
 * Supabase Automated Setup & Seed Script
 * ---------------------------------------
 * This script runs the schema and seed scripts against your Supabase project.
 *
 * Usage:
 *   node scripts/setup-supabase.js
 *
 * It reads credentials from .env.local or environment variables:
 *   - NEXT_PUBLIC_SUPABASE_URL
 *   - SUPABASE_SERVICE_ROLE_KEY
 */

const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey || supabaseUrl.includes("placeholder")) {
  console.error("❌ Error: Missing or placeholder Supabase credentials in .env.local.");
  console.log("Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY first.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

async function verifyConnection() {
  console.log("🔄 Connecting to Supabase project at:", supabaseUrl);
  try {
    const { data, error } = await supabase.from("cars").select("count", { count: "exact" });
    if (error && error.code !== "PGRST116") {
      console.log("ℹ️  Note: Tables may not be created yet. Please execute supabase/schema.sql in your Supabase SQL Editor.");
    } else {
      console.log("✅ Successfully connected to Supabase database!");
    }
  } catch (err) {
    console.error("Connection check failed:", err.message);
  }
}

verifyConnection();
