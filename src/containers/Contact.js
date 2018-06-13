import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Address from "../components/Address";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

class Contact extends Component {
  render() {
    const { contactpage, navbar, footer } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>Contact - Students on Stage</title>
        </Helmet>
        <Navbar {...navbar} page="contact" />
        <main>
          <ContactUs
            title={contactpage.contactTitle}
            desc={contactpage.contactDescription}
            people={contactpage.people}
          />
          <Address
            title={contactpage.addressTitle}
            desc={contactpage.addressDescription}
            address={contactpage.address}
            phone={contactpage.addressPhone}
          />
          <CTA
            title={contactpage.ctaTitle}
            desc={contactpage.ctaDescription}
            button={contactpage.ctaMailButton}
            buttonLink={contactpage.ctaMailAction}
            secondaryButton={contactpage.ctaWebsiteButton}
            secondaryButtonLink={contactpage.ctaWebsiteLink.url}
            page="contact"
          />
          <Footer {...footer} />
        </main>
      </Fragment>
    );
  }
}

export default withRouteData(Contact);
