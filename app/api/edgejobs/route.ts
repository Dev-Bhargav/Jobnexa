import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
  let jobs = await prisma.jobs.findMany({
    cacheStrategy: {
      ttl: 60,
      swr: 10,
    },
  }); 

  return NextResponse.json(jobs, { status: 200 });
}