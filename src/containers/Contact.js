import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Address from "../components/Address";
import Footer from "../components/Footer";

class Contact extends Component {
  render() {
    const { contactpage, navbar, footer } = this.props;

    return (
      <Fragment>
        <Navbar {...navbar} />
        <ContactUs
          title={contactpage.contactTitle}
          desc={contactpage.contactDescription}
          people={contactpage.people}
        />
        <Address
          title={contactpage.addressTitle}
          desc={contactpage.addressDescription}
          address={contactpage.address}
        />
        <Footer {...footer} />
      </Fragment>
    );
  }
}

export default withRouteData(Contact);
