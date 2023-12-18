import Quicknav from "@/app/ui/Quicknav";
import TypeBlog from "@/app/ui/TypeBlog";

export const revalidate = 15

export default function Home({
  params,
}: {
  params: {
    category: string;
  };
}) {
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-4xl  text-[#2D2B2B] font-black my-4">
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)}{" "}
          Jobs
        </h1>
        <TypeBlog category={params.category} />
      </div>
      <Quicknav />
    </>
  );
}

export async function generateStaticParams() {
  const jobsCat = ["govt", "railway", "defence", "bank"];
  return jobsCat.map((category) => ({
    category,
  }));
}
