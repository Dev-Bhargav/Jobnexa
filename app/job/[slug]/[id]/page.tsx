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
      <div className="flex flex-col gap-3 max-w-[20%]">
        <h1 className="text-4xl w-[30ch] text-[#2D2B2B] font-black my-4">
          {title}
        </h1>
        <Detail id={params.id}/>
      </div>
      <Quicknav />
    </>
  );
}
