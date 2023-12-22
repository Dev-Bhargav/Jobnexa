import { Clock} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Jobs } from "@prisma/client";

export default function Blog({data}:{
  data: Jobs[]
}) {

  return (
    <>
      {data.map((job, i) => (
        <div key={i} className="px-3 py-2 bg-[#FBFBFB] border border-[#E2E2E1] rounded-sm">
          <h1 className="text-lg leading-5 sm:leading-6 sm:text-xl font-semibold">
            {/* //! Correct This title database */}
            {job.title.charAt(0).toUpperCase() + job.title.slice(1)}
          </h1>
          <p className="text-[#5A5A5A] xs:text-sm xs:leading-4 sm:text-base sm:leading-5 text-opacity-80 py-1.5">
            {/* //! Correct This description database */}
            {job.description.charAt(0).toUpperCase() + job.description.slice(1)}
            
          </p>
          <div className="mt-1 flex items-center justify-between">
            <p className="flex gap-1 items-center text-sm font-medium text-[#6F6D6D]">
              <Clock size={15} strokeWidth={2.5} />
              {new Date(job.created_at).toDateString().slice(4)}
            </p>
            <Link href={`/job/${job.slug.replace(/\s/g, "-")}/${job.id}`}>
              <button className="bg-black rounded-sm text-white font-medium px-3 py-0.5 flex items-center gap-1">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
