import React from "react";
import LazyLoad from "react-lazyload";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import OrnamentImg from "../../assets/img/ornament_5.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 12em;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 16em;
  }
`;

const Ornament = styled.img`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
    position: absolute;
    top: -14.2em;
    transform-origin: 0% 50%;
    transform: scale(0.6);
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    transform: scale(1);
  }
`;

const Title = styled.h1`
  padding: 32px 0 24px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 72px 0 24px;
  }
`;

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const Desc = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.containerSm};

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const StyledAddress = styled.address`
  margin-top: 2.4em;

  p {
    font-size: 1.8em;
    font-weight: ${props => props.theme.fontWeights.medium};

    :not(:last-child) {
      margin-bottom: 2px;
    }
  }
`;

const MapWrap = styled.div`
  background-color: ${props => props.theme.palette.loading};
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.containerSm};
  height: 34.4em;
  margin: 0 auto;
  position: relative;
  top: 6.4em;
`;

const Address = ({ title, desc, address }) => (
  <Wrap>
    <LazyLoad once offset={250} height={"auto"}>
      <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    </LazyLoad>
    <ContentWrap>
      <Title>{title}</Title>
      <Desc>{desc && RichText.render(desc)}</Desc>
      <StyledAddress>{address && RichText.render(address)}</StyledAddress>
    </ContentWrap>
    <MapWrap>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.728482049521!2d4.409709552045674!3d51.224077279489535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f655d07e1265%3A0xf136a62f448ea52f!2sUnifac+Vzw!5e0!3m2!1sen!2sbe!4v1525953899042"
        width="100%"
        height="100%"
        allowFullScreen
      />
    </MapWrap>
  </Wrap>
);

export default Address;
