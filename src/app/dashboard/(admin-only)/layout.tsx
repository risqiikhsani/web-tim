// import { auth } from "@/auth";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  // const session = await auth();

  // const allowed_role = ["admin", "moderator"];

  // if (session?.user.role && !allowed_role.includes(session?.user.role)) {
  //   return <div>Not Allowed</div>;
  // }

  return <>{children}</>;
}
