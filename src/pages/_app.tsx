import { AppProps } from "next/app";
import Head from "next/head";

import { memo } from "react";

import GlobalStyle from "_/styles/global";

export default memo(({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Meu Endereço</title>
    </Head>

    <GlobalStyle />

    <Component {...pageProps} />
  </>
));
