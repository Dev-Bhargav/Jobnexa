import React from "react";
import SearchedJobs from "../../ui/SearchedJobs";

export default function Page({
  params,
}: {
  params: {
    query: string;
  };
}) {
  return <SearchedJobs searchedText={params.query} />;
}
