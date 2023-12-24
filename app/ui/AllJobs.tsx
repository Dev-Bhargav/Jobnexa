"use client";

import React, { useEffect, useRef, useState } from "react";
import Blog from "./Blog";
import { useInView } from "react-intersection-observer";
import { Jobs } from "@prisma/client";

export default function AllJobs({ initialJobs }: { initialJobs: Jobs[] }) {
  const [data, setData] = useState(initialJobs);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();
  const skip = useRef(0);

  const fetchMoreData = async () => {
    const limit = 4;
    skip.current = skip.current + limit;
    try {
      console.log(skip.current);
      const response = await (
        await fetch(
          `http://localhost:3000/api/morejobs?skip=${skip.current}&limit=${limit}`
        )
      ).json();
      if (response?.length) {
        setData((prevData) => [...prevData, ...response]);
      }
      else{
        setHasMore(false)
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  useEffect(() => {
    if (inView) {
      fetchMoreData();
    }
  }, [inView]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-3" id="scrollableDiv">
        {<Blog data={data} />}
      </div>
      { hasMore ? <div
        ref={ref}
        className="h-8 w-8 rounded-full border-[6px] border-[#eee] border-t-[#d3d2d2]  animate-spin"
      ></div>: <p className="my-3">-- You have reached the end --</p>}
    </div>
  );
}