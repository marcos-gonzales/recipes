import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../db";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // ...add more providers here
  ],
  callbacks: {
    async session({ session, user }: any) {
      const profile = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });
      if (!profile) {
        const profile = await prisma.user.create({
          data: {
            email: session.user.email,
            name: session.user.name,
            image: session.user.image,
          },
        });
        session.id = profile.id;
        return profile;
      }
      // Send properties to the client, like an access_token from a provider.
      session.id = profile.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
export default NextAuth(authOptions);
