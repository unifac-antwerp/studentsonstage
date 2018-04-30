import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Intro from "../components/Intro";
import ImageCarousel from "../components/ImageCarousel";
import Opportunities from "../components/Opportunities";
import Aftermovie from "../components/Aftermovie";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    const { navbar, homepage, footer } = this.props;

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

    const stats = [
      {
        icon: homepage.headerStatisticOneIcon,
        number: homepage.headerStatisticOneNumber,
        title: homepage.headerStatisticOneTitle
      },
      {
        icon: homepage.headerStatisticTwoIcon,
        number: homepage.headerStatisticTwoNumber,
        title: homepage.headerStatisticTwoTitle
      },
      {
        icon: homepage.headerStatisticThreeIcon,
        number: homepage.headerStatisticThreeNumber,
        title: homepage.headerStatisticThreeTitle
      }
    ];

    const opportunities = [
      {
        icon: homepage.opportunityOneIcon,
        title: homepage.opportunityOneTitle,
        desc: homepage.opportunityOneDescription,
        ctaTitle: homepage.opportunityOneCtaTitle,
        ctaAction: homepage.opportunityOneCtaAction
      },
      {
        icon: homepage.opportunityTwoIcon,
        title: homepage.opportunityTwoTitle,
        desc: homepage.opportunityTwoDescription,
        ctaTitle: homepage.opportunityTwoCtaTitle,
        ctaAction: homepage.opportunityTwoCtaAction
      },
      {
        icon: homepage.opportunityThreeIcon,
        title: homepage.opportunityThreeTitle,
        desc: homepage.opportunityThreeDescription,
        ctaTitle: homepage.opportunityThreeCtaTitle,
        ctaAction: homepage.opportunityThreeCtaAction
      }
    ];

    return (
      <Fragment>
        <Navbar {...navbar} />
        <Header
          logo={homepage.headerLogo}
          poweredBy={homepage.headerPoweredBy}
          date={homepage.date}
          location={homepage.location}
          stats={stats}
        />
        <Intro logo={homepage.unifacLogo} intro={homepage.intro} />
        <ImageCarousel
          title={homepage.carouselTitle}
          carouselImages={carouselImages}
        />
        <Opportunities
          title={homepage.opportunitiesTitle}
          desc={homepage.opportunitiesDescription}
          opportunities={opportunities}
        />
        <Aftermovie
          title={homepage.aftermovieTitle}
          aftermovie={homepage.aftermovie}
        />
        <CTA
          title={homepage.ctaTitle}
          desc={homepage.ctaDescription}
          button={homepage.ctaButton}
        />
        <Footer {...footer} />
      </Fragment>
    );
  }
}

export default withRouteData(Home);
