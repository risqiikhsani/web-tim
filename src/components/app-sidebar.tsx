import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Publishable",
      url: "#",
      items: [
        {
          title: "News",
          url: "/dashboard/news",
        },
        {
          title: "Blogs",
          url: "/dashboard/blogs",
        },
        {
          title: "Files",
          url: "/dashboard/files",
        },
      ],
    },
    {
      title: "Others",
      url: "#",
      items: [
        {
          title: "Careers",
          url: "#",
        },

        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Partners",
          url: "#",
        },
        {
          title: "Consumers",
          url: "#",
        },
      ],
    },
    {
      title: "Internal Sites",
      url: "#",
      items: [
        {
          title: "TIMCorp LMS",
          url: "#",
        },
        {
          title: "TIMCorp AI",
          url: "#",
        },
        {
          title: "TIMCorp Analytics",
          url: "#",
        },
      ],
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="py-20 ">
      <SidebarHeader className="">
        <p>TIMCorp</p>
      </SidebarHeader>
      <SidebarContent className="">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
