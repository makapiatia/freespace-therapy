import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const authCookie = request.cookies.get("site_auth")?.value;

  if (authCookie === process.env.SITE_PASSWORD) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login|.*\\..*).*)"],
};
