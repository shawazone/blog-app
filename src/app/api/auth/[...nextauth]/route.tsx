import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import prisma from '../../../lib/prismadb'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email ?? '' },
          
        }
        );
console.log('user');
         
        if (!user) {
          // User not found
          return null;
        }

        const temp = credentials?.password;
        if (typeof temp !== 'string') {
          // Invalid password value
          return null;
        }

        // const hashedPassword = await bcrypt.hash(temp, 10);   this is useless here as we are not storing the password in the database

        if (await bcrypt.compare(temp, user.hashedPassword as string)) {
          return { id: user.id.toString() }; // Return the user object if credentials are valid
        
        }

        return null; // Return null if credentials are invalid
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey
        }
      }
      return token
    }
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}