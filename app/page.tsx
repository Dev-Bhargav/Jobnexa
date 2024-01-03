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
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-3xl sm:text-4xl text-[#2D2B2B] font-black my-4">
          Latest Jobs
        </h1>
        <Blog data={jobs} />
        <h1 className="text-3xl sm:text-4xl text-[#2D2B2B] font-black my-4">
          All Jobs
        </h1>
        <AllJobs initialJobs={jobs} />
      </div>
    </>
  );
}
