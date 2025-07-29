import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = process.env.TOKEN_NAME!;
const CORRECT_COOKIE_VALUE = process.env.TOKEN!;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookie = await cookies();
  const FORM_DYNAMIC_PATH_REGEX = /^\/form\/[^/]+$/;
  const UNPROTECTED_PATHS = ["/", "/form/"];

  if (UNPROTECTED_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (FORM_DYNAMIC_PATH_REGEX.test(pathname)) {
    return NextResponse.next();
  }

  const authToken = cookie.get(AUTH_COOKIE_NAME);

  if (authToken && authToken.value === CORRECT_COOKIE_VALUE) {
    return NextResponse.next();
  }

  console.log(
    `Middleware: Unauthorized access attempt to ${pathname}. Redirecting to ${UNPROTECTED_PATHS[0]}`
  );
  console.log(
    `cookie:accessed:${CORRECT_COOKIE_VALUE} and ${authToken} and ${AUTH_COOKIE_NAME}`
  );

  return NextResponse.redirect(new URL(UNPROTECTED_PATHS[0], request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|css|js)$).*)",
  ],
};
