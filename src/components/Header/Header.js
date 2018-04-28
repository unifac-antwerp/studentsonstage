import React from "react";
import { RichText } from "prismic-reactjs";
import format from "date-fns/format";
import {
  Wrap,
  ContentWrapper,
  Logo,
  PoweredBy,
  Info,
  ImageLeft,
  ImageRight
} from "./styles";
import IntroStats from "../IntroStats";
import imageLeft from "../../assets/img/img_left.png";
import imageRight from "../../assets/img/img_right.png";

const Header = ({
  logo,
  poweredBy,
  date,
  location,
  statOneIco,
  statOneTitle,
  statOneNumber,
  statTwoIco,
  statTwoTitle,
  statTwoNumber,
  statThreeIco,
  statThreeTitle,
  statThreeNumber
}) => (
  <Wrap>
    <ImageLeft src={imageLeft} alt="" width="251" height="503" />
    <ContentWrapper>
      <Logo src={logo.url} alt="students on stage logo" />
      <PoweredBy>{RichText.render(poweredBy)}</PoweredBy>
      <Info>
        {format(date, "D MMMM YYYY", { locale: "nl" })} • {location}
      </Info>
      <IntroStats
        statOneIco={statOneIco}
        statOneTitle={statOneTitle}
        statOneNumber={statOneNumber}
        statTwoIco={statTwoIco}
        statTwoTitle={statTwoTitle}
        statTwoNumber={statTwoNumber}
        statThreeIco={statThreeIco}
        statThreeTitle={statThreeTitle}
        statThreeNumber={statThreeNumber}
      />
    </ContentWrapper>
    <ImageRight src={imageRight} alt="" width="205" height="708" />
  </Wrap>
);

export default Header;
