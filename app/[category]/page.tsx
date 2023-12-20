import Quicknav from "@/app/ui/Quicknav";
import { fetchJobsByCategory } from "@/lib/data";
import Blog from "../ui/Blog";

export const revalidate = 30

export default async function Home({
  params,
}: {
  params: {
    category: string;
  };
}) {
  const jobs = await fetchJobsByCategory(params.category);
  if (!jobs) {
    //TODO: Throw Proper Error
    throw new Error("No jobs found");
  }
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-4xl  text-[#2D2B2B] font-black my-4">
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
          Jobs
        </h1>
        <Blog data={jobs}/>
      </div>
      <Quicknav />
    </>
  );
}

export async function generateStaticParams() {
  const jobsCat = ["govt", "railway", "defence", "bank", "dev"];
  return jobsCat.map((category) => ({
    category,
  }));
}