import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/app/db";

export const authOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    callbacks: {
        async session({ session, user }) {
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export const { auth, signIn, signOut } = NextAuth(authOptions);