import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  const foods = await prisma.food.findMany();
  return NextResponse.json(foods);
}
