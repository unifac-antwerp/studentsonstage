import React from "react";
import { Router } from "react-static";
import { ThemeProvider, injectGlobal } from "styled-components";
import branding from "./config/branding";
import reset from "styled-reset";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";

injectGlobal`
  ${reset}
`;

const App = () => (
  <Router type="browser">
    <ThemeProvider theme={branding}>
      <Routes />
    </ThemeProvider>
  </Router>
);

export default hot(module)(App);
