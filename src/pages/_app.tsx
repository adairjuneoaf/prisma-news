import type { AppProps } from "next/app";
import Head from "next/head";

import HeaderApp from "../components/HeaderApp";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>prisma.news | Aprenda de tudo um pouco sobre o universo React </title>
      </Head>
      <HeaderApp />
      <Component {...pageProps} />

      <GlobalStyle />
    </>
  );
}

export default MyApp;
