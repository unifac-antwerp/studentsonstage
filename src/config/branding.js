import { css } from "styled-components";

const palette = {
  neutral01: "#3C3C3C",
  neutral10: "#ffffff",
  global01: "#0099FF"
};

const grid = {
  maxWidth: "120em",
  container: "90%"
};

const fonts = {
  roboto: "'Roboto', sans-serif",
  montserrat: "'Montserrat', sans-serif"
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

const textStyles = {
  heading01: css`
    font-family: ${fonts.montserrat};
    font-size: 3.2em;
    font-weight: ${fontWeights.bold};
    color: ${palette.global01};
  `,
  heading02: css`
    font-family: ${fonts.montserrat};
    font-size: 2.6em;
    font-weight: ${fontWeights.medium};
    color: ${palette.neutral01};
  `,
  paragraph: css`
    font-size: 1.6em;
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.light};
    color: ${palette.neutral01};
  `,
  button: css`
    font-family: ${fonts.montserrat};
    font-weight: ${fontWeights.medium};
    font-size: 1.6em;
  `
};

export const globalStyles = css`
  body {
    color: ${palette.neutral01};
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: ${fontWeights.light};
    font-size: 62.5%;
  }

  h1 {
    ${textStyles.heading01};
  }

  h2 {
    ${textStyles.heading02};
  }

  p {
    ${textStyles.paragraph};
  }

  ::selection {
    color: ${palette.neutral10};
    background: ${palette.global01};
  }

  ::-moz-selection {
    color: ${palette.neutral10};
    background: ${palette.global01};
  }

  b,
  strong {
    font-weight: ${fontWeights.medium};
  }

  i {
    font-style: italic;
  }

  a {
    text-decoration: none;
  }
`;

export default {
  palette,
  textStyles,
  fontWeights,
  fonts,
  grid
};
