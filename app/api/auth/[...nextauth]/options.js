import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

console.log("hello2")
export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("GitHubProvider profile", profile);
        let userRole = "GitHub User";
        if (profile?.email == "gonsolvis@gmail.com") {
          userRole = "admin";
          console.log("Userrle:", userRole);
        }

        return {
          ...profile,
          role: userRole,
          image: profile?.avatar_url
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("profile google", profile);
        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
          image: profile?.picture,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
