import React, { ReactNode } from 'react'

export default function BorderCool({children}:{children:ReactNode}) {
  return (
    <div className="relative group w-full">
      {/* Glowing Pulse Animation Layer */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
        rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-500 
        animate-pulse group-hover:animate-none"></div>
      
      {/* Gradient Border Layer */}
      <div className="relative w-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 
        group-hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        
        {/* Inner Content Layer */}
        <div className="rounded-md flex h-full w-full items-center justify-center 
          bg-white dark:bg-slate-900 relative z-10 

          transition-colors duration-300">
          {children}
        </div>
      </div>
    </div>
  )
}