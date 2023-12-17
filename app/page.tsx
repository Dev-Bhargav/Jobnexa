import Blog from "./ui/Blog";
import Quicknav from "./ui/Quicknav";

export default function Home() {
  return (
    <>
      <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
        <h1 className="text-3xl sm:text-4xl text-[#2D2B2B] font-black my-4">
          All Jobs
        </h1>
        <Blog />
      </div>
      <Quicknav />
    </>
  );
}
