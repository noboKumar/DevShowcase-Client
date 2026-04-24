import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/projects/add/:path*", "/projects/manage/:path*"],
};

export function middleware(req: NextRequest) {
  const session = getSessionCookie(req);

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
