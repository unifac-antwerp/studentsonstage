import React, { Component } from "react";
import { withRouteData } from "react-static";

class Home extends Component {
  render() {
    const { homepage } = this.props;

    return (
      <div>
        <h1>{homepage.homeTitle}</h1>
      </div>
    );
  }
}

export default withRouteData(Home);
