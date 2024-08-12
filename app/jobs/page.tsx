import React from "react";
import AllJobs from "../ui/AllJobs";

export default function Jobs() {
  return (
    <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-5 flex gap-3 flex-col">
      <AllJobs />
    </div>
  );
}
