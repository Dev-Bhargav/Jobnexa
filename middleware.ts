import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get('$Admin')?.value
  if (request.nextUrl.pathname.startsWith("/admin") && cookie === process.env.ADMIN_COOKIE) {
    return NextResponse.next()
  }else{
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: ["/admin", "/api/:path"],
};
