import { query } from "faunadb";

import stripe from "../../../services/stripe";
import fauna from "../../../services/fauna";

async function saveSubscription(subscriptionId: string, customerId: string, createAction: boolean) {
  const userRef = await fauna.query(query.Select("ref", query.Get(query.Match(query.Index("user_by_stripe_customer_id"), customerId))));

  const { id, status, items, current_period_end } = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    userId: userRef,
    subscriptionId: id,
    subscriptionStatus: status,
    subscriptionPriceId: items.data[0].price.id,
    subscriptionExpirationDate: current_period_end,
  };

  if (createAction) {
    await fauna.query(query.Create(query.Collection("subscriptions"), { data: subscriptionData }));
  } else {
    await fauna.query(query.Replace(query.Select("ref", query.Get(query.Match(query.Index("subscription_by_id"), id))), { data: subscriptionData }));
  }
}

export default saveSubscription;
