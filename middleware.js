import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const url = req.nextUrl
  const pathname = url.pathname


  if (pathname.startsWith("/Login")) {
return NextResponse.next()
}
if (pathname.startsWith("/about")) {
  return NextResponse.next()
}

if (!token) {
  return NextResponse.redirect(new URL("/", req.url))
}
  
  if (pathname.startsWith("/Dashboard")) {
    return NextResponse.next()
  }

  if(pathname.startsWith("/Payment-success")){
    
    return NextResponse.next()}


  const parts = pathname.split("/").filter(Boolean) // /ali → ["ali"]
  
  
  if (parts.length === 1) {
    const usernameInUrl = parts[0]
    let name= token.name
    
    
    if (usernameInUrl !== name) {
      // if logged in user tries to access someone else’s route
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/Dashboard/:path*", "/:username"], 
}
