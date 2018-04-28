import React, { Fragment } from "react";
import { Router } from "react-static";
import { ThemeProvider, injectGlobal } from "styled-components";
import branding, { globalStyles } from "./config/branding";
import Navbar from "./components/Navbar";
import reset from "styled-reset";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";

injectGlobal`
  ${reset}
  ${globalStyles}
`;

const App = () => (
  <Router type="browser">
    <ThemeProvider theme={branding}>
      <Fragment>
        <Routes />
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default hot(module)(App);
