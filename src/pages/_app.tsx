import type { AppProps } from "next/app";
import Head from "next/head";

import { SessionProvider as NextAuthProvider } from "next-auth/react";

import HeaderApp from "../components/HeaderApp";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Head>
        <title>prisma.news | Aprenda de tudo um pouco sobre o universo React </title>
      </Head>
      <HeaderApp />
      <Component {...pageProps} />

      <GlobalStyle />
    </NextAuthProvider>
  );
}

export default MyApp;
