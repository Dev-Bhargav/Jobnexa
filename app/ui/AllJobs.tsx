"use client";

import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { useInView } from "react-intersection-observer";
import { useJobs } from "../Context/JobContext";

export default function AllJobs() {
  const { jobs, addJobs, limit, skip } = useJobs();
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  
  useEffect(() => {
    const fetchMoreData = async () => {
      try {
        const response = await (
          await fetch(`/api/morejobs?skip=${skip.current}&limit=${limit}`)
        ).json();
        if (response?.length) {
          addJobs(response);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching more data:", error);
      }
    };
    if (inView) {
      fetchMoreData();
    }
  }, [addJobs, inView, limit, skip]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-3" id="scrollableDiv">
        {<Blog data={jobs} />}
      </div>
      {hasMore ? (
        <div
          ref={ref}
          className="h-8 w-8 rounded-full border-[6px] border-loading border-t-loading-bar animate-spin"
        ></div>
      ) : (
        <p className="my-1">-- You have reached the end --</p>
      )}
    </div>
  );
}