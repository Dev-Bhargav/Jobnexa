"use client";

import { ChevronsLeft, Home, Landmark, ShieldHalf, Train } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "../Context/store";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  let { navState, setNavState } = useAppContext();
  function sideNavActive() {
    setNavState((preActive: boolean) => !preActive);
  }

  return (
    <>
      <div
        className={cn(
          "h-full w-full absolute pointer-events-none xl:hidden",
          {
            "bg-background/80 backdrop-blur-sm pointer-events-auto": !navState,
          }
        )}
      ></div>
      <div

        className={cn(
          "w-[200px] sm:w-[250px] xl:w-[200px] h-full flex-shrink-0 bg-[#FBFBFB] border border-[#E2E2E1] transition-[width]  duration-300 xl:relative absolute overflow-hidden pointer-events-auto",
          {
            "xl:w-0 sm:w-0 w-0": navState,
          }
        )}
      >
        <div className="w-[200px] sm:w-[250px] xl:w-[200px] h-full absolute">
          <div className="flex flex-col text-[#6F6D6D]">
            <div className="flex py-4 px-4 justify-between items-center">
              <h1 className="text-sm font-semibold tracking-wide">
                CATEGORIES
              </h1>
              <ChevronsLeft
                className=" cursor-pointer"
                onClick={sideNavActive}
              />
            </div>
            <div className="mt-3 flex flex-col [&_a]:py-0.5">
              <Link
                href="/"
                className="flex px-4 gap-3 hover:bg-[#eee] select-none"
                onClick={sideNavActive}
              >
                <Home size={20} />
                Home
              </Link>
              <Link
                href="/jobs/govt"
                className="flex px-4 gap-3 hover:bg-[#eee] select-none"
                onClick={sideNavActive}
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 18.6356V16.6356H4V12.6356H2V10.6356H4.1C4.3 9.38556 4.85417 8.30639 5.7625 7.39806C6.67083 6.48973 7.75 5.93556 9 5.73556V0.635559H16V4.63556H11V5.73556C12.25 5.93556 13.3292 6.48973 14.2375 7.39806C15.1458 8.30639 15.7 9.38556 15.9 10.6356H18V12.6356H16V16.6356H20V18.6356H0ZM6 16.6356H9V12.6356H6V16.6356ZM11 16.6356H14V12.6356H11V16.6356ZM6.15 10.6356H13.85C13.6167 9.75223 13.1417 9.03139 12.425 8.47306C11.7083 7.91473 10.9 7.63556 10 7.63556C9.1 7.63556 8.29167 7.91473 7.575 8.47306C6.85833 9.03139 6.38333 9.75223 6.15 10.6356Z"
                    fill="#6F6D6D"
                  />
                </svg>
                Govt Jobs
              </Link>
              <Link
                href="/jobs/railway"
                className="flex px-4 gap-3 hover:bg-[#eee] select-none"
                onClick={sideNavActive}
              >
                <Train size={20} />
                Railway Jobs
              </Link>
              <Link
                href="/jobs/bank"
                className="flex px-4 gap-3 hover:bg-[#eee] select-none"
                onClick={sideNavActive}
              >
                <Landmark size={20} />
                Bank Jobs
              </Link>
              <Link
                href="/jobs/defence"
                className="flex px-4 gap-3 hover:bg-[#eee] select-none"
                onClick={sideNavActive}
              >
                <ShieldHalf size={20} />
                Defence Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
