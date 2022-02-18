declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FAUNA_DB_KEY: string;
      NEXTAUTH_URL: string;
      STRIPE_API_KEY: string;
      NEXTAUTH_SECRET: string;
      GITHUB_CLIENT_ID: string;
      FAUNA_DB_ENDPOINT: string;
      STRIPE_FAILED_URL: string;
      STRIPE_SUCCESS_URL: string;
      GITHUB_CLIENT_SECRET: string;
      STRIPE_PRICE_PRODUCT_KEY: string;
      NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY: string;
    }
  }
}

export {};
