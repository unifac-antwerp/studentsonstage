import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";
import IntroStats from "../components/IntroStats";

class Home extends Component {
  render() {
    const { homepage, navbar } = this.props;

    return (
      <Fragment>
        <Navbar {...navbar} />
        <IntroStats
          statOneIco={homepage.headerStatisticOneIcon}
          statOneTitle={homepage.headerStatisticOneTitle}
          statOneNumber={homepage.headerStatisticOneNumber}
          statTwoIco={homepage.headerStatisticTwoIcon}
          statTwoTitle={homepage.headerStatisticTwoTitle}
          statTwoNumber={homepage.headerStatisticTwoNumber}
          statThreeIco={homepage.headerStatisticThreeIcon}
          statThreeTitle={homepage.headerStatisticThreeTitle}
          statThreeNumber={homepage.headerStatisticThreeNumber}
        />
        <div style={{ height: "200vh" }} />
      </Fragment>
    );
  }
}

export default withRouteData(Home);
