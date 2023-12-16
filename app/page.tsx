import Blog from "./ui/Blog";
import Quicknav from "./ui/Quicknav";

export default function Home() {
  return (
    <>
      <div className="w-1/2 min-w-[500px] flex gap-3 flex-col">
        <h1 className="text-4xl  text-[#2D2B2B] font-black my-4">
          All Jobs
        </h1>
        <Blog />
      </div>
      <Quicknav />
    </>
  );
}