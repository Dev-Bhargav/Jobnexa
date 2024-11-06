import { Calendar, Clock } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Jobs } from "@prisma/client";
import timeAgo from "@/lib/timeAgo";

export default function Blog({ data }: { data: Jobs[] }) {
  return (
    <>
      {data.map((job, i) => (
        <Link key={i} href={`/job/${job.slug.replace(/\s/g, "-")}/${job.id}`}>
          <div className="w-full px-3 py-4 bg-card border border-card-foreground transition duration-200 rounded-md hover:shadow-md">
            <h1 className="leading-[21.6px] font-bold py-1 text-lg md:text-xl md:leading-[24px]">
              {job.title}
            </h1>
            <p className="text-secondary-foreground xs:text-sm xs:leading-4 sm:text-base sm:leading-5 text-opacity-80 py-1">
              {job.description}
            </p>
            <div className="flex gap-5">
              <div className="mt-3 flex items-center justify-between">
                <p className="text-secondary-foreground flex gap-1 items-center text-xs md:text-sm md:font-medium">
                  <Clock size={18} strokeWidth={2} />
                  {timeAgo(job.created_at)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
