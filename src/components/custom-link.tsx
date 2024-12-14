"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function CustomLink({
  href,
  children,
  className = "",
  ...props
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} ${isActive ? "text-primary font-bold" : ""}`.trim()} {...props}>
      {children}
    </Link>
  );
}
