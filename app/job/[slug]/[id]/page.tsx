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
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <Detail id={params.id}/>
      </div>
      <Quicknav />
    </>
  );
}
