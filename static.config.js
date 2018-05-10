import React from "react";
import fetchData from "./src/prismic/fetch";
import { getSingleType } from "./src/prismic/mapper";
import { ServerStyleSheet } from "styled-components";

export default {
  // siteRoot: 'https://studentsonstage.unifac.be/',

  getRoutes: async () => {
    const data = await fetchData();
    const navbar = getSingleType(data, "navbar");
    const homepage = getSingleType(data, "homepage");
    const contactpage = getSingleType(data, "contact_page");
    const footer = getSingleType(data, "footer");

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({ homepage, navbar, footer })
      },
      {
        path: "/contact",
        component: "src/containers/Contact",
        getData: () => ({ contactpage, navbar, footer })
      },
      {
        is404: true,
        component: "src/containers/404",
        getData: () => ({ navbar })
      }
    ];
  },

  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },

  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png?v=2"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/ms-icon-144x144.png?v=2"
        />
        <meta name="theme-color" content="#ffffff" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
