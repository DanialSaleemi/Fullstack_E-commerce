import type { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET,
    //   }),
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET,
    //   }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),

      CredentialsProvider({
        name:"Credentials",
        credentials: {
            username: {
                label: "Username:",
                type: "text",
                placeholder: "username = user"
            },
            password: {
                label: "Password:",
                type: "password",
                placeholder: "password = nextauth"
            },
        },
        async authorize(credentials: { username: string; password: string }) {
            const user = { id: "42", name: "user", password: "nextauth" }

            if (credentials?.username === user.name && credentials?.password === user.password) {
                return user
            } else {
                return null
            }
        }
      })
    ],
    callbacks: {
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token
        }            
        token.userRole = "admin"
        return token
      },
  
    },
  }
  
  export default NextAuth(authOptions)