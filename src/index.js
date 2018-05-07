import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WebFont from "webfontloader";

export default App;

if (typeof document !== "undefined") {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById("root"));
  };

  render(App);
}

WebFont.load({
  google: {
    families: ["Montserrat:400,500,700", "Roboto:300,400,500"]
  }
});
