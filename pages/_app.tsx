import React, { ReactElement } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props): ReactElement {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#527b53" />
        <meta name="msapplication-TileColor" content="#527b53" />
        <meta name="msapplication-navbutton-color" content="#527b53" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#527b53" />
        <meta
          name="description"
          content="Plantas MJ, Trabalhamos com plantas, flores e ervas medicinais. Pronta entrega e sob encomenda. Em Ferraz de Vasconcelos."
        />
        <meta
          name="keywords"
          content="plantas,ferraz,flores,ervas medicinais"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
