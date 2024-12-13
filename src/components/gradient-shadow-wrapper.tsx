import { ReactNode } from "react";

const GradientShadowWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      {/* Gradient shadow */}
      <div className="absolute -inset-2 md:-inset-4 rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600 via-lime-600 to-violet-600 opacity-50 blur-2xl z-[-1]"></div>
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default GradientShadowWrapper;
