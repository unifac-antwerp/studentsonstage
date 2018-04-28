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
  button: css`
    font-family: ${fonts.montserrat};
    font-size: 1.6em;
  `
};

export default {
  palette,
  textStyles,
  fontWeights,
  fonts,
  grid
};
