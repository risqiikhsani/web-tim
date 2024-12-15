// import { auth } from "@/auth";
import AppSidebar from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  // const session = await auth()
  // if (!session) redirect("/auth/login")
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="rounded-md bg-slate-50 dark:bg-slate-900">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <div className="p-6 min-h-full ">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
