import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { CartProvider, useCart } from "react-use-cart";
import FilterContext from "../contexts/FilterContext";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [productsData, setProductsData] = React.useState();

  return (
    <FilterContext.Provider
      value={{
        state: {
          data: productsData,
        },
        setProductsData: setProductsData,
      }}
    >
      <Head>
        <title>Goblin Store</title>
        <link rel="shortcut icon" href="/logos/Duende.ico" />
      </Head>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </FilterContext.Provider>
  );
}

export default MyApp;
