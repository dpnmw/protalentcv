/**
 * Migration: Set all users without a plan to "free"
 *
 * Runs against the database specified by DATABASE_URL.
 * Safe to run multiple times — only updates rows where plan IS NULL.
 *
 * Usage:
 *   pnpm tsx scripts/database/set-plan-free.ts
 */

import { isNull, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { schema } from "@/integrations/drizzle";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is not set");

const pool = new Pool({ connectionString: databaseUrl });
const db = drizzle({ client: pool, schema });

console.log("⌛ Setting plan = 'free' for all users where plan IS NULL...");

const result = await db
  .update(schema.user)
  .set({ plan: "free" })
  .where(isNull(schema.user.plan));

const count = (result as unknown as { rowCount: number }).rowCount ?? 0;

console.log(`✅ Done. Updated ${count} user(s).`);

await pool.end();
