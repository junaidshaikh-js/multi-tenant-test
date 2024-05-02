import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl

  let hostname = req.headers.get('host')!

  const searchParams = req.nextUrl.searchParams.toString()
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`

  if (hostname == `multi-tenant-test-eta.vercel.app` || hostname === 'ratecity.localhost:3000') {
    return NextResponse.rewrite(new URL(`/ratecity${path === '/' ? '' : path}`, req.url))
  }

  if (
    hostname === 'multi-tenant-test-junaid-shaikhs-projects-e903cc81.vercel.app' ||
    hostname === 'canstar.localhost:3000'
  ) {
    return NextResponse.rewrite(new URL(`/canstar${path === '/' ? '' : path}`, req.url))
  }
}
