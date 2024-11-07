import { Jobs } from "@prisma/client";
import { prisma } from "./prisma";
import { QuicknavJobs } from "./definations";

export async function fetchLatestJobs() {
  try {
    const jobs: Jobs[] = await prisma.jobs.findMany({
      orderBy: {
        created_at: "desc",
      },
      cacheStrategy: {
        swr: 5,
        ttl: 20,
      },
      take: 4,
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

export async function QuicknavFetch() {
  try {
    const jobs: QuicknavJobs[] = await prisma.jobs.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
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

export async function fetchAllJobs() {
  try {
    const jobs = await prisma.jobs.findMany();
    return jobs;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchJobsBySearch(search: string) {
  try {
    const jobs: Jobs[] = await prisma.jobs.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
            },
          },
          {
            description: {
              contains: search,
            },
          },
          {
            content: {
              path: "$",
              string_contains: search
            },
          },
        ],
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
