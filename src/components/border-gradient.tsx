import React, { ReactNode } from "react";

export default function BorderGradient({ children }: { children: ReactNode }) {
  return (
    <div className="card-wrapper">
      <div className="card-content flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
