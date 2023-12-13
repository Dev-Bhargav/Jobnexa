import { quickNavFetch } from "@/lib/data";
import Link from "next/link";


export default async function Quicknav() {
  const jobs = await quickNavFetch();

  return (
    <div className="bg-[#FBFBFB] w-max mt-20 border rounded-sm border-[rgb(226,226,225)]">
      <div className="mt-10 w-[630px] flex flex-col items-center">
        {/* Subscribe  */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-black text-3xl text-[#2D2B2B]">
              Get Latest Job Notification
            </h1>
            <p className="w-[70%] text-[#9D9D9D] text-center leading-5">
              Get instant notification when new post is uploaded through email
              and it s free
            </p>
          </div>
          <form action="" className="flex items-start">
            <input
              type="text"
              placeholder="Enter the email..."
              className="bg-[#F3F3F3] placeholder:text-[#898989] py-2 rounded-l pl-2 md:w-96  outline-none border-[#B3B3B3] border border-r-0"
            />
            <button
              type="submit"
              className="bg-[#FFFDFD] py-[9px]  px-2 border-[#B3B3B3] border "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4998 1L10.0498 11.872"
                  stroke="#898989"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.5 1L13.85 20.7672L10.05 11.872L1.5 7.91853L20.5 1Z"
                  stroke="#898989"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {jobs.filter((job) => job.category === "govt").map((job, index, array) => (
          <div key={index}>
            <div className="my-5  w-11/12 h-[1px] bg-[#E2E2E1]"></div>
            <div className="w-10/12">
              <h1 className="text-2xl text-[#2D2B2B] font-bold">
                Latest Govt Jobs
              </h1>
              <div className="mt-3 w-11/12 mx-auto">
                <Link href={`/job/${job.title}/${job.id}`} className="text-[#3E3E3E] leading-5 hover:underline hover:text-black">{job.title}</Link>
                {index !== array.length - 1 && <div className="w-full my-2 h-[1px] bg-[#E2E2E1]"></div>}
              </div>
            </div>
          </div>
        ))}

        {jobs.filter((job) => job.category === "railway").map((job, index, array) => (
          <div key={index} className="pb-4">
            <div className="my-5  w-11/12 h-[1px] bg-[#E2E2E1]"></div>
            <div className="w-10/12">
              <h1 className="text-2xl text-[#2D2B2B] font-bold">
                Latest Railway Jobs
              </h1>
              <div className="mt-3 w-11/12 mx-auto">
                <Link href={`/job/${job.title}/${job.id}`} className="text-[#3E3E3E] leading-5 hover:underline hover:text-black">{job.title}</Link>
                {index !== array.length - 1 && <div className="w-full my-2 h-[1px] bg-[#E2E2E1]"></div>}
              </div>
            </div>
          </div>
        ))}

       
      </div>
    </div>
  );
}
