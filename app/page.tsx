import { fetchLatestJobs } from "@/lib/data";
import Blog from "./ui/Blog";
import AllJobs from "./ui/AllJobs";

export default async function Home() {
  const jobs = await fetchLatestJobs();
  if (!jobs) {
    //TODO: Throw Proper Error
    throw new Error("No jobs found");
  }
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-5 flex gap-3 flex-col">
        <Blog data={jobs} />
        <h1 className="text-3xl font-black my-2">
          All Jobs
        </h1>
        <AllJobs />
      </div>
    </>
  );
}