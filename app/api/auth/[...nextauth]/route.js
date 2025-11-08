
import NextAuth from "next-auth"
import mongodb from "@/mongodb"
import mongoose from "mongoose"

import User from "@/models/User"
import GitHubProvider from "next-auth/providers/github"



const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      if (account.provider === "github") {

       
        const connect = await mongodb()
        const currentuser = await mongoose.connection.db.collection("users").findOne({ email: user.email })

        if (!currentuser) {
          const newUser = new User({
            email: user.email,
            name: user.name,
            username:user.email.split("@")[0] ,
            // profilePicture: user.image


          })
          await newUser.save()

        }

      }

      return true
    },

    async session({ session, user, token }) {
      const db= await User.findOne({email:session.user.email})
      session.user.name=db.username
      token.name=db.username
     

      return session
    },


  }
});

export { handler as GET, handler as POST };
