export const authConfig = {
   pages: {
      signIn: '/login',
   }, 
   providers: [],
   callbacks: {
      async jwt({token, user}){
         if (user) {
            token.id = user.id;
            token.isAdmin = user.isAdmin;
         }
         return token;
      },
      async session({session, token}) {
         session.user.id = token.id;
         session.user.isAdmin = token.isAdmin;
         return session;
      },
      authorized({auth, request}) {
         const user = auth?.user;
         const isOnAdminPanel = request?.nextUrl?.pathname.includes('/admin');
         const isOnBlogPage = request?.nextUrl?.pathname.includes('/blog');
         const isOnLoginPage = request?.nextUrl?.pathname.includes('/login');
         const isOnPlayersPage = request?.nextUrl?.pathname.includes('/players');
         const isOnParentPage = request?.nextUrl?.pathname.includes('/parent');
//restrict access to admin panel
         if (isOnAdminPanel && !user?.isAdmin) {
            return false;
         }
//restrict access to players page
         if (isOnPlayersPage && !user?.isAdmin) {
            return false;
         }
//restrict access to blog page
         if (isOnBlogPage && !user) {
            return false;
         }
//restrict access to parent page
         if (isOnParentPage && !user) {
            return false;
         }
//redirect authenticated users to home page if they try to access login page
         if (isOnLoginPage && user) {
            return Response.redirect(new URL("/", request.nextUrl));
         }
         return true;
      }
   }
}