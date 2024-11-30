"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "@/components/mode-toggle";
import Image from "next/image";

import Logo from "@/logo/timcorp.png";
import { DialogTitle } from "@radix-ui/react-dialog";

// Navigation items
const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "MSIB", href: "/msib" },
  { label: "About Us", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-4 md:p-6 z-[50]">
      <div className="flex justify-between w-full border-2 border-white dark:border-primary dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-opacity-20 rounded-xl p-2 shadow-2xl">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <DialogTitle>
                <Image src={Logo} width={200} height={200} alt="logo" />
              </DialogTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              {navigationLinks.map((link) => (
                <DialogClose asChild key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </DialogClose>
              ))}
              <ModeToggle />
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <Image src={Logo} width={50} height={50} alt="logo" />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 max-[825px]:hidden">
          {navigationLinks.map((link) => (
            <Button asChild variant="ghost" key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
