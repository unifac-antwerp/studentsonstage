import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";

class Home extends Component {
  render() {
    const { homepage, navbar } = this.props;
    return (
      <Fragment>
        <Navbar title={navbar.title} contactButton={navbar.contactButton} />
        <div style={{ height: "200vh" }} />
      </Fragment>
    );
  }
}

export default withRouteData(Home);
