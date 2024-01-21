import { auth } from "./auth"

export default auth((req) => {
  const isLoggedIn = !!req.auth

  console.info("Route", req.nextUrl.pathname)
  console.info("islogin", isLoggedIn)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/auth/login", "/auth/register"],
}
