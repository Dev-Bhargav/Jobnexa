const { jobs } = require("../app/lib/placeholder");
const { PrismaClient } = require("@prisma/client");

async function seedJobs(prisma) {
  const jobsData = jobs.map((job) => ({
    title: job.title,
    description: job.description,
  }));

  try {
    const jobs = await prisma.jobs.createMany({
      data: jobsData,
    });

    console.log(`Seeded jobs ${jobs.length}`);
  } catch (err) {
    console.error("Error in sedding jobs", err.message);
  }
}

async function main() {
  const prisma = new PrismaClient();
  await seedJobs(prisma);
}

main().catch((err) => {
  console.log(err.message);
});
