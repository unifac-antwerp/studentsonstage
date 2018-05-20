import React from "react";
import fetchData from "./src/prismic/fetch";
import { getSingleType } from "./src/prismic/mapper";
import { ServerStyleSheet } from "styled-components";

export default {
  siteRoot: "https://studentsonstage.unifac.be",

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
        component: "src/containers/404"
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
    <Html lang="nl">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Students on Stage</title>
        <meta
          name="description"
          content="Students on Stage is het festival waarmee het academisch jaar feestelijk wordt afgetrapt door de studenten aan de stadscampus van de Universiteit Antwerpen en bij uitbreiding heel de stad Antwerpen. Onder begeleiding van pompende beats overtuigen verschillende verenigingen hun doelpubliek om lid te worden en er samen een fantastisch jaar van te maken op zowel studentikoos als educatief vlak. Er is geen betere manier dan samen met 10.000 studenten onder de zon de vakantie af te sluiten en het academiejaar op gang te trekken!"
        />
        <meta name="author" content="wouter.landuydt@gmail.com" />
        <meta
          name="keywords"
          content="Festival, Studenten, UAntwerpen, Unifac, Drinken, Eten, Dansen, Netwerken, Muziek, DJ, Verenigingen, Bedrijven, Stadscampus, Academische opening, Bart De Wever"
        />
        {/* <!-- Search Engine --> */}
        <meta
          name="image"
          content="https://studentsonstage.netlify.com/share_image.jpg"
        />
        {/* <!-- Schema.org for Google --> */}
        <meta itemProp="name" content="Students on Stage" />
        <meta
          itemProp="description"
          content="Students on Stage is het festival waarmee het academisch jaar feestelijk wordt afgetrapt door de studenten aan de stadscampus van de Universiteit Antwerpen en bij uitbreiding heel de stad Antwerpen. Onder begeleiding van pompende beats overtuigen verschillende verenigingen hun doelpubliek om lid te worden en er samen een fantastisch jaar van te maken op zowel studentikoos als educatief vlak. Er is geen betere manier dan samen met 10.000 studenten onder de zon de vakantie af te sluiten en het academiejaar op gang te trekken!"
        />
        <meta
          itemProp="image"
          content="https://studentsonstage.netlify.com/share_image.jpg"
        />
        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Students on Stage" />
        <meta
          name="twitter:description"
          content="Students on Stage is het festival waarmee het academisch jaar feestelijk wordt afgetrapt door de studenten aan de stadscampus van de Universiteit Antwerpen en bij uitbreiding heel de stad Antwerpen. Onder begeleiding van pompende beats overtuigen verschillende verenigingen hun doelpubliek om lid te worden en er samen een fantastisch jaar van te maken op zowel studentikoos als educatief vlak. Er is geen betere manier dan samen met 10.000 studenten onder de zon de vakantie af te sluiten en het academiejaar op gang te trekken!"
        />
        <meta
          name="twitter:image:src"
          content="https://studentsonstage.netlify.com/share_image_twitter.jpg"
        />
        {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
        <meta name="og:title" content="Students on Stage" />
        <meta
          name="og:description"
          content="Students on Stage is het festival waarmee het academisch jaar feestelijk wordt afgetrapt door de studenten aan de stadscampus van de Universiteit Antwerpen en bij uitbreiding heel de stad Antwerpen. Onder begeleiding van pompende beats overtuigen verschillende verenigingen hun doelpubliek om lid te worden en er samen een fantastisch jaar van te maken op zowel studentikoos als educatief vlak. Er is geen betere manier dan samen met 10.000 studenten onder de zon de vakantie af te sluiten en het academiejaar op gang te trekken!"
        />
        <meta
          name="og:image"
          content="https://studentsonstage.netlify.com/share_image.jpg"
        />
        <meta name="og:url" content="https://studentsonstage.unifac.be" />
        <meta name="og:site_name" content="Students on Stage" />
        <meta name="og:locale" content="nl-be" />
        <meta name="fb:admins" content="348659001868647" />
        <meta name="fb:app_id" content="205970553524010" />
        <meta name="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png?v=3"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png?v=3"
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
      <Body>
        <h1 style={{ display: "none" }}>Students On Stage</h1>
        {children}
      </Body>
    </Html>
  )
};
