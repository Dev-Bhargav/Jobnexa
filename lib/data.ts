import { Jobs } from "@prisma/client";
import { prisma } from "./prisma";
import { QuickNavJobs } from "./definations";

export async function fetchJobs() {
  try {
    const jobs: Jobs[] = await prisma.jobs.findMany({
      orderBy: {
        created_at: "desc",
      },
      cacheStrategy: {
        swr: 5,
        ttl: 20,
      },
    });
    if (!jobs) {
      throw new Error("No jobs found");
    }
    return jobs;
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}

export async function quickNavFetch() {
  try {
    const jobs: QuickNavJobs[] = await prisma.jobs.findMany({
      select: {
        id: true,
        title: true,
        category: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: 4,
    });
    return jobs;
  } catch (err) {
    console.error("Error fetching jobs:", err);
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchJobsByCategory(category: string) {
  try {
    const jobs: Jobs[] = await prisma.jobs.findMany({
      where: {
        category: category,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return jobs;
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchJob(jobId: string) {
  try {
    const job: Jobs | null = await prisma.jobs.findUnique({
      where: {
        id: jobId,
      },
      cacheStrategy: {
        swr: 30,
        ttl: 21600,
      },
    });
    //! Make Proper Error
    if (!job) {
      throw new Error("Job not found: ");
    }
    return job;
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}
