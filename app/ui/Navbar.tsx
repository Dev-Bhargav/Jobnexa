"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bowlby_One_SC } from "next/font/google";
import { AlignJustify, List, Moon, Search, Sun, User } from "lucide-react";

const bowlbyOneSC = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<string>("light");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function switchMode() {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.body.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
    console.log(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
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
    <nav className="bg-background w-full pr-4 pl-2 sticky top-0 flex flex-col justify-between items-center">
      <div
        className={cn(
          "w-full py-3 relative flex items-center justify-between after:absolute after:h-[1px] after:left-0 after:right-0 after:bottom-0 after:bg-card-foreground after:opacity-1 after:transition-opacity duration-200",
          {
            "after:opacity-1": isScrolled,
          }
        )}
      >
        {/* <div className="h-full w-[1px] bg-card-foreground absolute left-56"></div> */}

        <Link href="/" aria-label="Logo">
          <h1 className={cn("md:text-4xl text-3xl p-1", bowlbyOneSC.className)}>
            JOB<span className="text-accent">NEXA</span>
          </h1>
        </Link>

        <nav>
          <ul className=" hidden md:flex gap-7 text-sm">
            <Link href="/">
              <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
                Home
              </li>
            </Link>
            <Link href="/jobs">
              <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
                Jobs
              </li>
            </Link>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
              Exams
            </li>
            <li className="cursor-pointer transition duration- ease-in-out hover:text-accent">
              About Us
            </li>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
              Contact Us
            </li>
          </ul>
        </nav>
        <div className="flex gap-3 items-center">
          {theme === "dark" ? (
            <Sun onClick={switchMode} size={23} className="cursor-pointer" />
          ) : (
            <Moon onClick={switchMode} size={23} className="cursor-pointer" />
          )}
          <Search size={20} className="cursor-pointer" />
          <User size={20} className="cursor-pointer" />
          <AlignJustify
            size={20}
            className="cursor-pointer flex md:hidden"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {/* Mobile Menu  */}
      <div
        className={` w-full md:hidden border border-card-foreground bg-background mt-16 z-10 absolute transition-all duration-100000 ease-linear transform ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 border-none opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col p-5 items-center gap-3 text-lg">
          <Link href="/" onClick={toggleMenu}>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
              Home
            </li>
          </Link>
          <Link href="/jobs" onClick={toggleMenu}>
            <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
              Jobs
            </li>
          </Link>
          <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
            Exams
          </li>
          <li className="cursor-pointer transition duration- ease-in-out hover:text-accent">
            About Us
          </li>
          <li className="cursor-pointer transition duration-200 ease-in-out hover:text-accent">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
}
