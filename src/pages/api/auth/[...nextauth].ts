import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import fauna from "../../../services/fauna";
import { query } from "faunadb";

interface signInTypes {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "read:user, user:email",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      const { email } = user;

      try {
        await fauna.query(
          query.If(
            query.Not(query.Exists(query.Match(query.Index("user_by_email"), query.Casefold(String(email))))),
            query.Create(query.Collection("users"), { data: { email } }),
            query.Get(query.Match(query.Index("user_by_email"), query.Casefold(String(email))))
          )
        );
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});
