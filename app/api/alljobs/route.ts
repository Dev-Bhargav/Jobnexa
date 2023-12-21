import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = 'force-dynamic'

export async function GET() {
  const jobs = await prisma.user.findMany({
    cacheStrategy: {
      ttl: 60,
      swr: 5,
    },
  });
  return NextResponse.json(jobs, { status: 200 });
}
