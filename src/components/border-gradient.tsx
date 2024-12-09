import React, { ReactNode } from "react";

export default function BorderGradient({ children }: { children: ReactNode }) {
  return (
    <div className=" relative w-[200px] h-[200px] rounded-[10px] shadow-[16px_16px_20px_#0000008c] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[conic-gradient(transparent,transparent,#00a6ff)] before:animate-spin-slow">
      <div className="text-slate-200 absolute flex justify-center items-center text-center top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-[10px] px-4 bg-[#1c1c1c] shadow-[20px_20px_20px_#0000008c_inset]">
        {children}
      </div>
    </div>
  );
}
