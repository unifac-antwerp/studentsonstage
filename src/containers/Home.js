import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Helmet from "react-helmet";
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

    return (
      <Fragment>
        <Helmet>
          <title>Home - Students on Stage</title>
        </Helmet>
        <Navbar {...navbar} page="home" />
        <main>
          <Header
            logo={homepage.headerLogo}
            poweredBy={homepage.headerPoweredBy}
            date={homepage.date}
            location={homepage.location}
            stats={homepage.statistics}
          />
          <Intro logo={homepage.unifacLogo} intro={homepage.intro} />
          <ImageCarousel
            title={homepage.carouselTitle}
            images={homepage.images}
          />
          <Opportunities
            title={homepage.opportunitiesTitle}
            desc={homepage.opportunitiesDescription}
            opportunities={homepage.opportunities}
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
        </main>
      </Fragment>
    );
  }
}

export default withRouteData(Home);
