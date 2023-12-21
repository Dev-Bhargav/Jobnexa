import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const fetchCache = 'force-no-store';
export const revalidate = 0

export async function GET() {
  let jobs = await prisma.jobs.findMany(); 
  return NextResponse.json(jobs, { status: 200 });
}