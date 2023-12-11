import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchJobs() {
  try {
    let jobs = await prisma.jobs.findMany();
    return jobs;
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}
