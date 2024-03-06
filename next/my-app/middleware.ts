import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('&&&>>', request.cookies);
  const didLogin = request.cookies.has('nextjs');
  if (!didLogin) return NextResponse.redirect(new URL('/photos', request.url));
  return NextResponse.next();
}
export const config = {
  // matcher: ['/api/users', '/hello/:path*'],
  matcher: ['/api/xxx'],
};
