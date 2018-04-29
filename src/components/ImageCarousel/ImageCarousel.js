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
  position: relative;
`;

const Ornament = styled.img`
  position: absolute;
  top: -14.2em;
`;

const StyledCarousel = styled(Carousel)`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container} !important;
  margin: 0 auto;
  position: relative;
  top: 14.4em;
`;

const ImageCarousel = ({ carouselImages }) => (
  <Wrap>
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <StyledCarousel
      autoplay
      wrapAround
      renderCenterLeftControls={({ previousSlide }) => (
        <StyledArrow onClick={previousSlide} src={Arrow} alt="" />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <StyledArrow next onClick={nextSlide} src={Arrow} alt="" />
      )}
      renderBottomCenterControls={({}) => null}
    >
      {carouselImages.map(image => (
        <img key={image.url} src={image.url} alt="carousel image" />
      ))}
    </StyledCarousel>
  </Wrap>
);

export default ImageCarousel;
