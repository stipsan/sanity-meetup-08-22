import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import customers from './customers.json' assert { type: 'json' }

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { hostname } = request.nextUrl
  const response = NextResponse.next()
  if (hostname === 'localhost') {
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
  }
  const [id] = hostname.split('.')
  const customer = customers.find((customer) => customer.id === id)
  const origin = request.headers.get('origin')
  if (customer?.origin && customer.origin === origin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    return response
  }

  return response
}

export const config = {
  matcher: ['/vX/:path*'],
}
