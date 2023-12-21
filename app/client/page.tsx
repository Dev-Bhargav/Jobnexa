"use client";

import { Jobs } from "@prisma/client";

import { useEffect, useState } from "react";
import Blog from "../ui/Blog";
import Quicknav from "../ui/Quicknav";

export default function Home() {
  const [jobs, setJobs] = useState<Jobs[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/edge`, { cache: "no-store" });
        const data = await response.json();
        console.log(data);
        setJobs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-3xl sm:text-4xl text-[#2D2B2B] font-black my-4">
          All Jobs
        </h1>
        <Blog data={jobs} />
      </div>
      {/* <Quicknav /> */}
    </>
  );
}
