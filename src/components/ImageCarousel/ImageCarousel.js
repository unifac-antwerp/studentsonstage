import React from "react";
import { Link } from "react-static";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import StyledArrow from "./controls/Arrow";
import Arrow from "../../assets/svg/arrow.svg";
import OrnamentImg from "../../assets/img/ornament_1.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 11.2em;
  margin-bottom: 14.4em;
  height: 72em;
  position: relative;
`;

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm} !important;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: ${props => props.theme.grid.container} !important;
  }
`;

const Ornament = styled.img`
  position: absolute;
  top: -14.2em;
`;

const Title = styled.h1`
  padding: 72px 0 24px;
`;

const ImageCarousel = ({ title, images }) => (
  <Wrap>
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <ContentWrap>
      <Title>{title}</Title>
      <Carousel
        autoplay
        wrapAround
        dragging={false}
        renderCenterLeftControls={({ previousSlide }) => (
          <StyledArrow onClick={previousSlide} src={Arrow} alt="" />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <StyledArrow next onClick={nextSlide} src={Arrow} alt="" />
        )}
        renderBottomCenterControls={({}) => null}
      >
        {images.map(i => (
          <img key={i.image.url} src={i.image.url} alt="carousel image" />
        ))}
      </Carousel>
    </ContentWrap>
  </Wrap>
);

export default ImageCarousel;
