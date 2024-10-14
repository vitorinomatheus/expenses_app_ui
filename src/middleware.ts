import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname == '/') {
        return NextResponse.redirect(new URL('/home', request.url))
    }
    if (!request.nextUrl.pathname.startsWith('/login') ||
        !request.nextUrl.pathname.startsWith('/create_user')) {
            const jwt = request.cookies.get('jwt')
            if (jwt == null || jwt.value != 'teste')
                return NextResponse.redirect(new URL('/login?authenticationFailed=true', request.url))
    }
    else { 
        const jwt = request.cookies.get('jwt')
        if (jwt != null)
            return NextResponse.redirect(new URL('/home', request.url))
    }
}