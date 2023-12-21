import { Jobs } from "@prisma/client";
import Blog from "./ui/Blog";
import Quicknav from "./ui/Quicknav";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VAR_URL}/api/edge`, {cache: "no-store"});
  const jobs: Jobs[] = await response.json();
  if (!jobs) {
    //TODO: Throw Proper Error
    throw new Error("No jobs found");
  }
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-3xl sm:text-4xl text-[#2D2B2B] font-black my-4">
          All Jobs
        </h1>
        <Blog data={jobs} />
      </div>
      <Quicknav />
    </>
  );
}