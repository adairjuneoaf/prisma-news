import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { Readable } from "stream";
import Stripe from "stripe";
import stripe from "../../services/stripe";
import { saveSubscription } from "./_lib/manageSubscription";

async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const relevantEvents = new Set(["checkout.session.completed", "customer.subscription.updated", "customer.subscription.deleted"]);

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const secret = req.headers["stripe-signature"];

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, String(secret), process.env.STRIPE_WEBHOOK_SECRET_KEY);
    } catch (error) {
      return res.status(400).send(`Webhook error:  ${error}`);
    }

    const { type } = event;

    if (relevantEvents.has(type)) {
      try {
        switch (type) {
          case "customer.subscription.updated":
          case "customer.subscription.deleted":
            const { id, customer: subscriptionCustomer } = event.data.object as Stripe.Subscription;

            await saveSubscription(String(id), String(subscriptionCustomer), false);

            break;

          case "checkout.session.completed":
            const { subscription, customer: checkoutCustomer } = event.data.object as Stripe.Checkout.Session;

            await saveSubscription(String(subscription), String(checkoutCustomer), true);

            break;
          default:
            throw new Error("Unhandled event.");
        }
      } catch {
        return res.json({ error: "Webhook handler failed." });
      }
    }

    res.status(200).end("Success");
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};

export default webhook;
