import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Abhi ke liye sirf dashboard ya protected pages secure karna
    "/dashboard(.*)",

    // Agar future me API routes ko protect karna ho to:
    "/(api|trpc)(.*)",
  ],
};
