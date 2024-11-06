import React from "react";

import { fetchJobsBySearch } from "@/lib/data";
import Blog from "./Blog";

export default async function SearchedJobs(params: { searchedText: string }) {
  const text = decodeURIComponent(params.searchedText);
  const jobs = await fetchJobsBySearch(text);

  return (
    <div className="flex  flex-col items-center gap-5">
      <div className="flex w-full flex-col  gap-3" id="scrollableDiv">
        {jobs && jobs.length>0 ? <Blog data={jobs} /> : "Nothing found"}
      </div>
    </div>
  );
}
