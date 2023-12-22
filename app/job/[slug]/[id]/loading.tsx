import React from "react";

export default function Loading() {
  return(
    <div className="h-[500px] flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-[6px] border-[#eee] border-t-[#d3d2d2]  animate-spin"></div>
    </div>
  );
}
