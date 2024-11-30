import Link from "next/link";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ModeToggle from "./mode-toggle";

const navigations = [
  { label: "Home", href: "/" },
  { label: "MSIB", href: "/msib" },
  { label: "About Us", href: "/about" },
  { label: "News", href: "/news" },
];

const others = [
  {
    title: "Blogs",
    description: "Blogs of ours",
    icon: <Book className="size-5 shrink-0" />,
    url: "/blogs",
  },
  {
    title: "Company",
    description: "Our mission is to innovate and empower the world",
    icon: <Trees className="size-5 shrink-0" />,
    url: "/company",
  },
  {
    title: "Careers",
    description: "Browse job listing and discover our workspace",
    icon: <Sunset className="size-5 shrink-0" />,
    url: "/careers",
  },
  {
    title: "Support",
    description: "Get in touch with our support team",
    icon: <Zap className="size-5 shrink-0" />,
    url: "/support",
  },
];

const services = [
  {
    title: "All services",
    description: "Get all the answers you need right here",
    icon: <Zap className="size-5 shrink-0" />,
    url: "/services",
  },
  {
    title: "Cloud Consulting",
    description: "We are here to help you with any questions you have",
    icon: <Zap className="size-5 shrink-0" />,
    url: "/services/cloud-consulting",
  },
  {
    title: "Cloud Solutions",
    description: "We are here to help you fix your current needs",
    icon: <Zap className="size-5 shrink-0" />,
    url: "/services/cloud-solutions",
  },
  {
    title: "Migration / Transformation",
    description: "Migrate or transform your current architecture for the better",
    icon: <Zap className="size-5 shrink-0" />,
    url: "/services/cloud-migration-transformation",
  },
  {
    title: "Education / Training",
    description: "We are here to help you te be what you want",
    icon: <Zap className="size-5 shrink-0" />,
    url: "/services/education",
  },
];

const SideNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>Menu</SheetTrigger>
      <SheetContent>
        <SheetTitle>Menu</SheetTitle>
        <Button asChild variant="ghost">
          <Link href="test">test</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};

const TopNavbar = () => {
  return (
    <section className=" fixed w-full flex justify-center items-center p-4 border-b-2 shadow-2xl z-50 border-primary dark:border-primary  bg-opacity-10 backdrop-filter backdrop-blur-lg  border-opacity-20">
      <div className="container">
        <nav className="hidden md:flex gap-2 items-center justify-center">
          <Link href="/">
            <Image src="/logo/timcorp.png" width={50} height={50} alt="logo" />
          </Link>

          {navigations.map((a, i) => (
            <Link
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
            </Link>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-3">
                    {services.map((item, idx) => (
                      <Link
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
                      </Link>
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
                      <Link
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
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
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
