import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await prisma.user.findFirst({
    where: { email, password },
  });

  if (!user) {
    return NextResponse.json({ message: "Invalid Credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login Successful", user });
}
