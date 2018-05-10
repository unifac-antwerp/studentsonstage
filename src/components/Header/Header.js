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
  ImageLeftSm,
  ImageRight,
  ImageRightSm
} from "./styles";
import IntroStats from "../IntroStats";
import imageLeft from "../../assets/img/img_left.png";
import imageLeftSm from "../../assets/img/img_left_sm.png";
import imageRight from "../../assets/img/img_right.png";
import imageRightSm from "../../assets/img/img_right_sm.png";

const Header = ({ logo, poweredBy, date, location, stats }) => (
  <Wrap>
    <ImageLeft src={imageLeft} alt="" width="251" height="503" />
    <ImageLeftSm src={imageLeftSm} alt="" width="141" height="283" />
    <ContentWrapper>
      <Logo src={logo.url} alt="students on stage logo" />
      <PoweredBy>{poweredBy && RichText.render(poweredBy)}</PoweredBy>
      <Info>
        {date && format(date, "D MMMM YYYY", { locale: "nl" })} • {location}
      </Info>
      <IntroStats stats={stats} />
    </ContentWrapper>
    <ImageRight src={imageRight} alt="" width="205" height="708" />
    <ImageRightSm src={imageRightSm} alt="" width="141" height="283" />
  </Wrap>
);

export default Header;
