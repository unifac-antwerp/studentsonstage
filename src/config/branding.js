import { css } from "styled-components";

const palette = {
  neutral01: "#3C3C3C",
  neutral02: "#191919",
  white: "#ffffff",
  global01: "#0099FF",
  global02: "#33ADFF",
  background: "#EBF7FF"
};

const grid = {
  maxWidth: "1120px",
  maxWidthSm: "880px",
  container: "90%",
  containerSm: "94%"
};

const breakpoints = {
  xxl: "1290px",
  xl: "1100px",
  md: "960px",
  sm: "680px",
  xs: "520px"
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
    line-height: 32px;
  `,
  heading02: css`
    font-family: ${fonts.montserrat};
    font-size: 2.6em;
    font-weight: ${fontWeights.medium};
    color: ${palette.neutral01};
    line-height: 28px;
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
  footer: css`
    font-size: 16px;
    font-family: ${fonts.roboto};
    font-weight: ${fontWeights.light};
    color: ${palette.white};
  `,
  button: css`
    font-family: ${fonts.montserrat};
    font-weight: ${fontWeights.regular};
    font-size: 1.6em;
  `
};

const shadows = {
  shadow01: css`
    box-shadow: 0 6px 18px 8px rgba(0, 0, 0, 0.05);
  `,
  shadow02: css`
    box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.05);
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
      margin-bottom: 8px;
    }
  }

  ::selection {
    color: ${palette.white};
    background: ${palette.global02};
  }

  ::-moz-selection {
    color: ${palette.white};
    background: ${palette.global02};
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
  grid,
  breakpoints,
  textStyles,
  fontWeights,
  fonts,
  shadows
};
