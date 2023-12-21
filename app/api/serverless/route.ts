import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextResponse } from "next/server";

const prisma = new PrismaClient().$extends(withAccelerate())

export const fetchCache = 'force-no-cache';
export const revalidate = 0

export async function GET() {
  let jobs = await prisma.jobs.findMany({
    cacheStrategy: {
      ttl: 60,
      swr: 10,
    },
  }); 

  return NextResponse.json(jobs, { status: 200 });
}