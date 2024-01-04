import { fetchAllJobs } from "@/lib/data";

export default async function sitemap() {
  const baseUrl = "https://www.jobnexa.in";
  const jobs = await fetchAllJobs();
  const jobsUrls =
    jobs?.map((job) => {
      return {
        url: `${baseUrl}/job/${job.slug.replace(/\s+/g, '-')}/${job.id}`,
        lastModified: new Date(),
      };
    }) ?? [];
  const categoryUrls = [
    {
      url: `${baseUrl}/govt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/railway`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bank`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/defence`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/dev`,
      lastModified: new Date(),
    },
  ];
  return [
    {
      url: "/",
      lastModified: new Date(),
    },
    ...jobsUrls,
    ...categoryUrls,
  ];
}
