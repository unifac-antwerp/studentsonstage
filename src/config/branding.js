import { css } from "styled-components";

const palette = {
  neutral01: "#3C3C3C",
  white: "#ffffff",
  global01: "#0099FF",
  background: "#EBF7FF"
};

const grid = {
  maxWidth: "112em",
  maxWidthSm: "88em",
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
  heading03: css`
    font-family: ${fonts.montserrat};
    font-size: 2.2em;
    font-weight: ${fontWeights.bold};
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
    background-color: ${palette.background};
    font-family: ${fonts.roboto};
    font-style: normal;
    font-weight: ${fontWeights.light};
    font-size: 62.5%;
    line-height: 21px;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    ${textStyles.heading01};
  }

  h2 {
    ${textStyles.heading02};
  }

  h3 {
    ${textStyles.heading03};
  }

  p {
    ${textStyles.paragraph};

    :not(:last-child) {
      margin-bottom: 16px;
    }
  }

  ::selection {
    color: ${palette.white};
    background: ${palette.global01};
  }

  ::-moz-selection {
    color: ${palette.white};
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

  img {
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

export default {
  palette,
  textStyles,
  fontWeights,
  fonts,
  grid
};
