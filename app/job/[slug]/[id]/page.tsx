import Detail from "@/app/ui/Detail";
import Quicknav from "@/app/ui/Quicknav";

export default function Page({
  params,
}: {
  params: {
    slug: string;
    id: string;
  };
}) {
  const title = decodeURIComponent(params.slug);
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[500px] xl:w-3/4 xl:px-7 2xl:px-0 flex gap-3 flex-col">
        <h1 className="text-4xl  text-[#2D2B2B] font-black my-4">
          {title}
        </h1>
        <Detail id={params.id}/>
      </div>
      <Quicknav />
    </>
  );
}
