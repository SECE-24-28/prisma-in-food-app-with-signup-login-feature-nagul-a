"use server";

import pool from "../lib/db";

export async function storeFood(
  food_name: string,
  price: number,
  description: string,
  category: string
) {
  await pool.query(
    `INSERT INTO foods(food_name,price,description,category)
     VALUES($1,$2,$3,$4)`,
    [food_name, price, description, category]
  );
}