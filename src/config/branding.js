import { css } from "styled-components";

const palette = {
  neutral01: "#3C3C3C",
  neutral02: "#191919",
  neutral03: "#d8d8d8",
  white: "#ffffff",
  global01: "#005C99",
  global02: "#2e78c1",
  background: "#f3f7f9",
  loading: "rgb(229,227,223)"
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
    font-size: 28px;
    font-weight: ${fontWeights.bold};
    color: ${palette.global01};
    line-height: 32px;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 32px;
    }
  `,
  heading02: css`
    font-family: ${fonts.montserrat};
    font-size: 24px;
    font-weight: ${fontWeights.bold};
    color: ${palette.neutral01};
    line-height: 28px;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 26px;
    }
  `,
  heading03: css`
    font-family: ${fonts.montserrat};
    font-size: 20px;
    font-weight: ${fontWeights.bold};

    @media (min-width: ${breakpoints.sm}) {
      font-size: 22px;
    }
  `,
  paragraph: css`
    font-size: 16px;
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
    font-weight: ${fontWeights.medium};
    font-size: 16px;
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
  html {
    -webkit-text-size-adjust: 100%;
  }

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

  .wf-loading {
    font-family: Arial, Helvetica, sans-serif;
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

  ::selection {
    color: ${palette.white};
    background: ${palette.global02};
  }

  ::-moz-selection {
    color: ${palette.white};
    background: ${palette.global02};
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
