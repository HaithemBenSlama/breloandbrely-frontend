import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

// Basic Auth credentials (retrieved from environment variables)
const username = process.env.BASIC_AUTH_USER;
const password = process.env.BASIC_AUTH_PASS;

// Basic Authentication logic
export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [type, credentials] = authHeader.split(" ");
    if (type === "Basic") {
      const decoded = atob(credentials);
      const [user, pass] = decoded.split(":");
      if (user === username && pass === password) {
        // If authentication is successful, proceed to the locale middleware
        return createMiddleware({
          locales: ["ar-TN", "fr-FR", "en-US"],
          defaultLocale: "ar-TN",
          localePrefix: "always",
          localeDetection: true,
        })(request);
      }
    }
  }

  // If authentication fails, return a 401 Unauthorized response
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected"',
    },
  });
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
