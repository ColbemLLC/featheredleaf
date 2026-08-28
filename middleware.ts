import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/internal")) {
    const key = req.headers.get("x-internal-key");
    if (key !== process.env.INTERNAL_API_KEY) {
      return new Response("Forbidden", { status: 403 });
    }
  }
  if (req.nextUrl.pathname.startsWith("/v1")) {
    // session check, redirect/401 if missing
  }
}

export const config = { matcher: ["/internal/:path*", "/v1/:path*"] };