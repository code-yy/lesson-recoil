import "tailwindcss/tailwind.css";
import "@/styles/global.css";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <Head>
        <title>next-tailwind</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </RecoilRoot>
  );
};

export default MyApp;
