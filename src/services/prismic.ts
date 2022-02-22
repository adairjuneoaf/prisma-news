import * as Prismic from "@prismicio/client";

function getPrismicClient() {
  const prismic = Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}

export default getPrismicClient;
