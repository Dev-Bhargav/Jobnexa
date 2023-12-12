import { fetchJob } from "@/lib/data";
import { convertHtml } from "@/lib/utils";
import React from "react";


export default async function Detail(props: { id: string }) {
  const jobs = await fetchJob(props.id);
  const blocks = JSON.parse(jobs.content).blocks;
  const modifedHtml = convertHtml(blocks);

  return (
    <div className="flex flex-col gap-5">
      {modifedHtml.map((html, i) => (
        <div
          key={i}
          className="[&_a]:text-blue-700 [&_a]:underline [&_a]:decoration-blue-500"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      ))}
      <table className="[&_td]:w-96 [&_td]:leading-5 [&_td]:px-4 [&_td]:py-2 max-w-full">
        <thead>
          <tr>
            <th colSpan={2} className="py-2 px-4 border text-start text-xl">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-x">
            <td className="font-medium">Post</td>
            <td>SBI Clerk</td>
          </tr>
          <tr className="border-x">
            <td className="font-medium">Date</td>
            <td>17-11-2023</td>
          </tr>
          <tr className="border-x border-b">
            <td className="font-medium">Total Vacancy </td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
