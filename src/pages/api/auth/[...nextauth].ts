import NextAuth, { DefaultSession, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import fauna from "../../../services/fauna";
import { query } from "faunadb";

import toast from "react-hot-toast";

interface TypeExtendUser extends DefaultSession {
  email: string;
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
    async session({ session }) {
      const { email } = session.user as TypeExtendUser;

      try {
        const queryDataSubscriptionUser = await fauna.query(
          query.Get(
            query.Intersection([
              query.Match(
                query.Index("subscription_by_user_ref"),
                query.Select("ref", query.Get(query.Match(query.Index("user_by_email"), query.Casefold(email))))
              ),
              query.Match(query.Index("subscription_by_status"), "active"),
            ])
          )
        );

        return { ...session, subscriptionUser: queryDataSubscriptionUser };
      } catch {
        return { ...session, subscriptionUser: null };
      }
    },

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
        toast.error("Erro ao efetuar o Login!");

        return false;
      }
    },
  },
});
