import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Intro from "../components/Intro";
import ImageCarousel from "../components/ImageCarousel";

class Home extends Component {
  render() {
    const { homepage, navbar } = this.props;

    const carouselImages = [
      homepage.carouselImageOne,
      homepage.carouselImageTwo,
      homepage.carouselImageThree,
      homepage.carouselImageFour,
      homepage.carouselImageFive,
      homepage.carouselImageSix,
      homepage.carouselImageSeven,
      homepage.carouselImageEight,
      homepage.carouselImageNine,
      homepage.carouselImageTen
    ];

    return (
      <Fragment>
        <Navbar {...navbar} />
        <Header
          logo={homepage.headerLogo}
          poweredBy={homepage.headerPoweredBy}
          date={homepage.date}
          location={homepage.location}
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
        <Intro logo={homepage.unifacLogo} intro={homepage.intro} />
        <ImageCarousel carouselImages={carouselImages} />
        <div style={{ height: "200vh" }} />
      </Fragment>
    );
  }
}

export default withRouteData(Home);
