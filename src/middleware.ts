import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const jwt = request.cookies.get('jwt')
    if (jwt == null || jwt.value != 'teste')
        return NextResponse.redirect(new URL('/login?authenticationFailed=true', request.url))
}

export const config = {
    matcher: '/app/:path*'
}