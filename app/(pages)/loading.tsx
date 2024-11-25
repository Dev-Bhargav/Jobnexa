import React from "react";

export default function Loading() {
  return(
    <div className="h-[500px] flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-[6px] border-loading border-t-loading-bar  animate-spin"></div>
    </div>
  );
}
