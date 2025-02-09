import { NextRequest } from 'next/server'
import withI18n from './middlewares/with-i18n'

export function middleware(request: NextRequest) {
  return withI18n(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
