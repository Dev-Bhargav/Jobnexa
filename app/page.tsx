import Blog from "./ui/Blog";
import Quicknav from "./ui/Quicknav";

export default function Home() {
  return (
    <>
      <div className="w-1/2 flex flex-col gap-3">
        <h1 className="text-4xl  text-[#2D2B2B] font-black my-4">
          Latest Jobs
        </h1>
        <Blog />
      </div>
      <Quicknav />
    </>
  );
}