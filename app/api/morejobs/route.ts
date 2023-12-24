import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  const skipVal = request.nextUrl.searchParams.get("skip")
  const limit = request.nextUrl.searchParams.get("limit")
  try {
    const jobs = await prisma.jobs.findMany({
      orderBy: {
        created_at: "desc",
      },
      skip: Number(skipVal),
      take: Number(limit),
    });
    if (!jobs) {
      throw new Error("No jobs found");
    }
    return NextResponse.json(jobs, { status: 200 });
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}
