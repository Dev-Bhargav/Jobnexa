import Blog from "./ui/Blog";
import Quicknav from "./ui/Quicknav";

<<<<<<< HEAD
export const fetchCache = "force-no-store"
=======
export const fetchCache = "no-store"
>>>>>>> 72ad936d7657ab7f2bed427f9998ae4f3c495c66
export const dynamic = 'force-dynamic'
export const revalidate = 0

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
