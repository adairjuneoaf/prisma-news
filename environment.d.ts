declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string;
      STRIPE_API_KEY: string;
      NEXTAUTH_SECRET: string;
      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;
    }
  }
}

export {};
