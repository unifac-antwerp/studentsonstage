import React from "react";
import fetchData from "./src/prismic/fetch";
import { getSingleType } from "./src/prismic/mapper";
import { ServerStyleSheet } from "styled-components";

export default {
  getSiteData: () => ({
    title: "Students on Stage"
  }),
  getRoutes: async () => {
    const data = await fetchData();
    const homepage = getSingleType(data, "homepage");
    const navbar = getSingleType(data, "navbar");

    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({ homepage, navbar })
      },
      {
        path: "/contact",
        component: "src/containers/Contact",
        getData: () => ({ navbar })
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
        <link
          async
          href="https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Roboto:300,400,500"
          rel="stylesheet"
        />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
