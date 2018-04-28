import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";

class Contact extends Component {
  render() {
    const { navbar } = this.props;

    return (
      <Fragment>
        <Navbar {...navbar} />
        <p>Contact page</p>
      </Fragment>
    );
  }
}

export default withRouteData(Contact);
