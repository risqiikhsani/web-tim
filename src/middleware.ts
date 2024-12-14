// // uncomment this if you want to handle route permission inside authorized callback (auth.ts)
// // but authorized callback doesnt support redirect user to certain page , like dashboard/unauthorized.
// export { auth as middleware } from "@/auth";
import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const pathname = req.nextUrl.pathname;
  const admin_roles = ["admin", "moderator"];
  const admin_routes = ["/dashboard/news","/dashboard/blogs","/dashboard/files","/dashboard/messages","/dashboard/subscribers"]

  const authRoute = pathname.startsWith("/auth");

  // Define admin routes
  const isAdminRoute = admin_routes.includes(pathname)
  const isAdminRole = req.auth?.user?.role ? admin_roles.includes(req.auth?.user?.role) : false

  // If it's an admin route
  if (isAdminRoute) {
    // Not logged in at all
    if (!isLoggedIn) {
      return Response.redirect(new URL("/auth/login", req.nextUrl.origin));
    }

    // User is logged in but does NOT have admin roles
    if (isLoggedIn && !isAdminRole) {
      return Response.redirect(
        new URL("/dashboard/unauthorized", req.nextUrl.origin)
      );
    }
  }

  const authenticatedRoute = pathname.startsWith("/dashboard");
  // Other dashboard routes require authentication
  if (authenticatedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", req.nextUrl.origin));
  }

  if (isLoggedIn && authRoute) {
    return Response.redirect(new URL("/dashboard", req.nextUrl.origin));
  }
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images/|logo/|msib_images/|profile/|service_images/|aws_services_logo/|public/).*)",
  ],
};
