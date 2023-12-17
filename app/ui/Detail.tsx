import { fetchJob } from "@/lib/data";
import { convertHtml } from "@/lib/utils";
import React from "react";

export default async function Detail(props: { id: string }) {
  const jobs = await fetchJob(props.id);
  //! Make Proper Error
  if(!jobs){
    return 
  }
  const blocks = JSON.parse(jobs.content as string).blocks;
  const modifedHtml = convertHtml(blocks);

  return (
    <div className="flex flex-col gap-5 ">
      {modifedHtml.map((html, i) => (
        <div
          key={i}
          className="[&_a]:text-blue-700 [&_a]:underline [&_a]:decoration-blue-500"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      ))}
    </div>
  );
}
