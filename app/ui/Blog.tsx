import {Clock } from "lucide-react";
import React from "react";

export default function Blog() {
  return (
    <div className="w-[800px] px-3 py-2 bg-[#FBFBFB] border border-[#E2E2E1] rounded-sm">
      <h1 className="text-xl font-semibold">
        Tamil Nadu Latest Jobs 2023 Govt Job Vacancies
      </h1>
      <p className="text-[#5A5A5A] leading-5 text-opacity-80 py-1">
        Notifications for Tamil Nadu Government Jobs are available for both male
        and female TN residents who hold school certificates (10th, Matric, 12th
        pass)...
      </p>
      <div className="flex justify-between">
        <p className="flex gap-1 items-center text-sm font-medium text-[#6F6D6D]">
          <Clock size={15} strokeWidth={2.5} />2 days ago
        </p>
        <button className="bg-black rounded-sm text-white font-medium px-3 py-0.5 flex items-center gap-1">Read More </button>
      </div>
    </div>
  );
}
