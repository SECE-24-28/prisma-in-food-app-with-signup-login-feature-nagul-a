"use server";

import pool from "../lib/db";

export async function getFoods() {
  const result = await pool.query(
    "SELECT * FROM foods ORDER BY id"
  );

  return result.rows;
}