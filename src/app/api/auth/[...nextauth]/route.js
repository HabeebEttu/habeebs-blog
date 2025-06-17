import Credentials from "@auth/core/providers/credentials";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        
        if (email === "user@example.com" && password === "password") {
          return { id: 1, name: "User", email: "user@example.com" };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
  },
});

export { handler as GET, handler as POST };
