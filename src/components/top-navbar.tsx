import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ModeToggle from "./mode-toggle";
import UserAvatar from "./user-avatar";
import CustomLink from "./custom-link";

const navigations = [
  { label: "Home", href: "/" },
  { label: "MSIB", href: "/msib" },
  { label: "MergingHUB", href: "/services/cloud-migration-transformation" },
  { label: "News", href: "/news" },
  { label: "Blogs", href: "/blogs" },
];

const others = [
  {
    title: "About Us",
    description: "Who we are",
    icon: <Book className="size-5 shrink-0 text-cyan-500" />,
    url: "/about",
  },
  {
    title: "Projects",
    description: "Projects of ours",
    icon: <Book className="size-5 shrink-0 text-cyan-500" />,
    url: "/projects",
  },
  {
    title: "Company",
    description: "Our mission is to innovate and empower the world",
    icon: <Trees className="size-5 shrink-0 text-cyan-500" />,
    url: "/company",
  },
  {
    title: "Careers",
    description: "Browse job listing and discover our workspace",
    icon: <Sunset className="size-5 shrink-0 text-cyan-500" />,
    url: "/careers",
  },
  {
    title: "Contact",
    description: "Get in touch with our support team",
    icon: <Zap className="size-5 shrink-0 text-cyan-500" />,
    url: "/contact",
  },
];

const services = [
  {
    title: "Cloud Consulting and Solutions",
    description: "We provide consultations to help your business.",
    icon: <Zap className="size-5 shrink-0 text-cyan-500" />,
    url: "/services/cloud-consulting",
  },
  {
    title: "Cloud Migration and Transformation",
    description: "Migrate or transform your current architecture to be better.",
    icon: <Zap className="size-5 shrink-0 text-cyan-500" />,
    url: "/services/cloud-migration-transformation",
  },
  {
    title: "Education / Training",
    description: "We are to help new talents to become what they want.",
    icon: <Zap className="size-5 shrink-0 text-cyan-500" />,
    url: "/services/education",
  },
];

const SideNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-2 justify-start items-start">
        <SheetTitle>Menu</SheetTitle>
        {navigations.map((a, i) => (
          <SheetClose asChild key={i} className="pl-4">
            <CustomLink href={a.href}>{a.label}</CustomLink>
          </SheetClose>
        ))}
        <SheetTitle>Services</SheetTitle>
        {services.map((a, i) => (
          <SheetClose asChild key={i} className="pl-4">
            <CustomLink href={a.url}>{a.title}</CustomLink>
          </SheetClose>
        ))}
        <SheetTitle>Others</SheetTitle>
        {others.map((a, i) => (
          <SheetClose asChild key={i} className="pl-4">
            <CustomLink href={a.url}>{a.title}</CustomLink>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  );
};

const TopNavbar = () => {
  return (

    <section className="w-full fixed top-0 left-1/2 transform -translate-x-1/2 lg:top-5 lg:w-[80%] lg:rounded-full lg:border flex justify-center items-center p-4 shadow-2xl z-50 border-primary dark:border-primary bg-opacity-10 backdrop-filter backdrop-blur-lg border-opacity-20">
      <div className="container">
        <nav className="hidden md:flex gap-2 items-center justify-center">
          <CustomLink href="/">
            <Image src="/logo/timcorp.png" width={50} height={50} alt="logo" />
          </CustomLink>

          {navigations.map((a, i) => (
            <CustomLink
              key={i}
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                })
              )}
              href={a.href}
            >
              {a.label}
            </CustomLink>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-3">
                    {services.map((item, idx) => (
                      <CustomLink
                        key={idx}
                        className={cn(
                          "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                        href={item.url}
                      >
                        {item.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </CustomLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>
                  <span>Others</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-3">
                    {others.map((item, idx) => (
                      <CustomLink
                        key={idx}
                        className={cn(
                          "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                        href={item.url}
                      >
                        {item.icon}
                        <div>
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </CustomLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
          <UserAvatar />
        </nav>
        <div className="flex gap-2 justify-between md:hidden">
          <SideNavbar />
          <ModeToggle />
        </div>
      </div>
    </section>
  );
};

export default TopNavbar;
