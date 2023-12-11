import Image from "next/image";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";
import Blog from "./ui/Blog";
import Quicknav from "./ui/Quicknav";

export default function Home() {
  return (
    <section className="h-screen w-screen">
      <main className="h-full flex">
        <Sidebar />
        <div className="flex-grow max-w-full overflow-hidden">
          <Navbar />
          <div className="h-[calc(100vh-49px)] py-5 flex items-start justify-evenly overflow-y-auto">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl  text-[#2D2B2B] font-black my-4">Latest Jobs</h1>
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
            <Quicknav />
          </div>
        </div>
      </main>
    </section>
  );
}
