import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function fetchJobs() {
  try {
    const jobs = await prisma.jobs.findMany({
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
    const jobs = await prisma.jobs.findUnique({
      where: {
        id: jobId,
      },
    });

    return jobs;
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
}

interface Content {
  time: number;
  blocks: Array<Record<string, string | object>>;
  version: string;
}

type BlogContent = {
  title: string;
  description: string;
  slug: string;
  content: Content;
  date: string;
};

export async function createBlog<Type extends BlogContent>(data: Type) {
  try {
    await prisma.jobs.create({
      data: {
        title: data.title,
        description: data.description,
        content: JSON.stringify(data.content),
      },
    });
    return "Success";
  } catch (err) {
    console.error("Error fetching blogs 2:", err);
    return "Error in create blog";
  } finally {
    prisma.$disconnect;
  }
}

