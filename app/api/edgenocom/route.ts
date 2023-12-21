import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextResponse } from "next/server";

const prisma = new PrismaClient().$extends(withAccelerate())

export const fetchCache = 'force-no-store';
export const revalidate = 0
export const runtime = "edge";

export async function GET() {
  return NextResponse.json({simple: "simple Response"}, { status: 200 });
}