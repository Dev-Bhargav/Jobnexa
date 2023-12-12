import Quicknav from "@/app/ui/Quicknav";
import TypeBlog from "@/app/ui/TypeBlog";

export default function Home({
    params,
  }: {
    params: {
      category: string;
    };
  }) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl  text-[#2D2B2B] font-black my-4">
          Latest Jobs
        </h1>
        <TypeBlog category={params.category}/>
      </div>
      <Quicknav />
    </>
  );
}