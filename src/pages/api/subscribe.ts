/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { query } from "faunadb";

import stripe from "../../services/stripe";
import { fauna } from "../../services/fauna";

type User = {
  ref: {
    id: string;
  };
  data: {
    stripe_customer_id: string;
  };
};

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    const userFaunaDB = await fauna.query<User>(query.Get(query.Match(query.Index("user_by_email"), query.Casefold(String(session?.user?.email)))));

    let customerId = userFaunaDB.data.stripe_customer_id;

    if (!userFaunaDB.data.stripe_customer_id) {
      const createStripeCustomer = await stripe.customers.create({
        name: String(session?.user?.name),
        email: String(session?.user?.email),
      });

      await fauna.query(
        query.Update(query.Ref(query.Collection("users"), userFaunaDB.ref.id), {
          data: { stripe_customer_id: createStripeCustomer.id },
        })
      );

      customerId = createStripeCustomer.id;
    }

    const createStripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [{ price: process.env.STRIPE_PRICE_PRODUCT_KEY, quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_FAILED_URL,
    });

    return res.status(200).json({ sessionId: createStripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};

export default subscribe;
