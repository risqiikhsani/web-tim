import { ReactNode } from "react";

// components/BorderWrapper.jsx
const BorderWrapper = ({ children }:{children:ReactNode}) => {
    return (
      <div className="relative p-4 rounded-lg overflow-hidden">
        {/* Shiny border layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-md opacity-75 animate-shine"></div>
  
        {/* Content container */}
        <div className="relative bg-black rounded-lg border-2 border-transparent">
          {children}
        </div>
      </div>
    );
  };
  
  export default BorderWrapper;
  