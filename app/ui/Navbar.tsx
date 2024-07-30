"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppContext } from "../Context/store";
import { Bowlby_One_SC } from "next/font/google";
import { Search, User } from "lucide-react";

const bowlbyOneSC = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const { navState, setNavState } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  function sideNavActive() {
    setNavState((preActive: boolean) => !preActive);
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full pr-4 pl-2 sticky top-0 flex justify-between items-center bg-white">
      <div
        className={cn(
          "w-full py-3 relative flex items-center justify-between after:absolute after:h-[2px] after:left-0 after:right-0 after:bottom-0 after:bg-[#E9E9E9] after:opacity-1 after:transition-opacity duration-200",
          {
            "after:opacity-1": isScrolled,
          }
        )}
      >
        <div className="h-full w-[2px] bg-[#E9E9E9] absolute left-56"></div>

        <Link href="/" aria-label="Logo">
          <h1 className={cn("text-4xl p-1", bowlbyOneSC.className)}>JOBNEXA</h1>
        </Link>

        <nav>
          <ul className="flex gap-7 text-sm">
            <Link href="/">
              <li className="cursor-pointer transition duration-200 ease-in-out hover:text-[#b37af8]">Home</li>
            </Link>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-[#b37af8]">Jobs</li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-[#b37af8]">Exams</li>
            <li className="cursor-pointer transition duration- ease-in-out hover:text-[#b37af8]">About Us</li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-[#b37af8]">Contact Us</li>
          </ul>
        </nav>
        <div className="h-full w-[2px] bg-[#E9E9E9] absolute right-20"></div>
        <div className="flex gap-3 items-center">
          <Search size={20} className="cursor-pointer" />
          <User size={20} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
