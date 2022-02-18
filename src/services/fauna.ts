import { Client } from "faunadb";

export const fauna = new Client({
  domain: process.env.FAUNA_DB_ENDPOINT,
  secret: process.env.FAUNA_DB_KEY,
});
