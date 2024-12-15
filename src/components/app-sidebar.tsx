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
import CustomLink from "./custom-link";
import { Folder } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title:"Public",
      url:"#",
      items:[
        {
          title: "Users",
          url: "/dashboard/users",
        },
      ]
    },
    {
      title: "Admin Only",
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
        {
          title: "Subscribers",
          url: "/dashboard/subscribers",
        },
        {
          title: "Messages",
          url: "/dashboard/messages",
        },
      ],
    },
    {
      title: "Others",
      url: "#",
      items: [
        {
          title: "Careers",
          url: "/dashboard/careers",
        },
        {
          title: "Projects",
          url: "/dashboard/projects",
        },
        {
          title: "Partners",
          url: "/dashboard/partners",
        },
        {
          title: "Consumers",
          url: "/dashboard/consumers",
        },
      ],
    },
    {
      title: "Internal Sites",
      url: "#",
      items: [
        {
          title: "TIMCorp LMS",
          url: "https://www.google.com/",
        },
        {
          title: "TIMCorp AI",
          url: "https://www.google.com/",
        },
        {
          title: "TIMCorp Analytics",
          url: "https://www.google.com/",
        },
      ],
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="py-20 dark:bg-slate-900 bg-slate-50">
      <SidebarHeader className="dark:bg-slate-900 bg-slate-50">
        <p>TIMCorp</p>
      </SidebarHeader>
      <SidebarContent className="dark:bg-slate-900 bg-slate-50">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <CustomLink href={item.url}><Folder/>{item.title}</CustomLink>
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
