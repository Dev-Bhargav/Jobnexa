import { fetchJobsByCategory } from "@/lib/data";
import Blog from "../ui/Blog";

export default async function Home({
  params,
}: {
  params: {
    category: string;
  };
}) {
  const jobs = await fetchJobsByCategory(params.category);
  console.log(jobs);
  if (!jobs?.length) {
    // #TODO Make Proper Error page 
    return (
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-3xl text-[#2D2B2B] font-black my-2">
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)}{" "}
          Jobs
        </h1>
        <p>No jobs found for this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-3xl text-[#2D2B2B] font-black my-2">
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)}{" "}
          Jobs
        </h1>
        <Blog data={jobs} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const jobsCat = ["govt", "defence", "dev"];
  return jobsCat.map((category) => ({
    category,
  }));
}
