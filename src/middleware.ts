import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/api/uploadthing'],
  afterAuth(auth, req) {
    //? ask: to not access the home page but it's breaking upload thing for some reason
    // if (auth.userId && auth.isPublicRoute) {
    //   let path = `/dashboard`;

    //   const newUrl = new URL(path, req.url);
    //   return NextResponse.redirect(newUrl);
    // }

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({
        returnBackUrl: req.url,
      });
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
