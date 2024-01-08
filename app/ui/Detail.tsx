import { fetchJob } from "@/lib/data";
import { convertHtml } from "@/lib/utils";
import React from "react";

export default async function Detail(props: { id: string }) {
  const jobs = await fetchJob(props.id);

  //! Make Proper Error
  if (!jobs) {
    return;
  }
  const blocks = JSON.parse(jobs.content as string).blocks;
  const modifedHtml = convertHtml(blocks);
  return (
    <>
      <h1 className="xs:text-2xl xs:leading-[26px] sm:text-4xl text-[#2D2B2B] font-black">
        {jobs.title}
      </h1>
      <div className="flex flex-col gap-5 [&_a]:text-blue-400 [&_a]:underline [&_a]:decoration-blue-500">
        {modifedHtml.map((html, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: html }}></div>
        ))}
      </div>
    </>
  );
}
