import { quickNavFetch } from "@/lib/data";
import Link from "next/link";
import Newsletter from "./Newsletter";

export default async function Quicknav() {
  const jobs = await quickNavFetch();

  return (
    <div className="bg-[#FBFBFB] w-max mt-20 border rounded-sm border-[rgb(226,226,225)]">
      <div className="mt-10 w-[630px] flex flex-col items-center">
        <Newsletter />

        {jobs
          .filter((job) => job.category === "govt")
          .map((job, index, array) => (
            <div key={index}>
              <div className="my-5  w-11/12 h-[1px] bg-[#E2E2E1]"></div>
              <div className="w-10/12">
                <h1 className="text-2xl text-[#2D2B2B] font-bold">
                  Latest Govt Jobs
                </h1>
                <div className="mt-3 w-11/12 mx-auto">
                  <Link
                    href={`/job/${job.title}/${job.id}`}
                    className="text-[#3E3E3E] leading-5 hover:underline hover:text-black"
                  >
                    {job.title}
                  </Link>
                  {index !== array.length - 1 && (
                    <div className="w-full my-2 h-[1px] bg-[#E2E2E1]"></div>
                  )}
                </div>
              </div>
            </div>
          ))}

        {jobs
          .filter((job) => job.category === "railway")
          .map((job, index, array) => (
            <div key={index} className="pb-4">
              <div className="my-5 w-11/12 h-[1px] bg-[#E2E2E1]"></div>
              <div className="w-10/12">
                <h1 className="text-2xl text-[#2D2B2B] font-bold">
                  Latest Railway Jobs
                </h1>
                <div className="mt-3 w-11/12 mx-auto">
                  <Link
                    href={`/job/${job.title}/${job.id}`}
                    className="text-[#3E3E3E] leading-5 hover:underline hover:text-black"
                  >
                    {job.title}
                  </Link>
                  {index !== array.length - 1 && (
                    <div className="w-full my-2 h-[1px] bg-[#E2E2E1]"></div>
                  )}
                </div>
              </div>
            </div>
          ))}

        {jobs
          .filter((job) => job.category === "defence")
          .map((job, index, array) => (
            <div key={index} className="pb-4">
              <div className="my-5 h-[1px] bg-[#E2E2E1]"></div>
              <div className="w-[450px]">
                <h1 className="text-2xl text-[#2D2B2B] font-bold">
                  Latest Defence Jobs
                </h1>
                <div className="mt-3 w-[410px] mx-auto">
                  <Link
                    href={`/job/${job.title}/${job.id}`}
                    className="text-[#3E3E3E] leading-5 hover:underline hover:text-black"
                  >
                    {job.title}
                  </Link>
                  {index !== array.length - 1 && (
                    <div className="w-full my-2 h-[1px] bg-[#E2E2E1]"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
