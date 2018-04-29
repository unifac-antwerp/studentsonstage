import React from "react";
import { Link } from "react-static";
import styled from "styled-components";
import Carousel from "nuka-carousel";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
`;

const StyledCarousel = styled(Carousel)`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
  margin-bottom: -8em;
`;

const ImageCarousel = ({ carouselImages }) => (
  <Wrap>
    <StyledCarousel
      autoplay
      wrapAround
      // renderCenterLeftControls={({ previousSlide }) => (
      //   <span onClick={previousSlide}>prev</span>
      // )}
      // renderCenterRightControls={({ nextSlide }) => (
      //   <span onClick={nextSlide}>next</span>
      // )}
      // renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => (
      //   <span onClick={goToSlide}>
      //     {currentSlide} / {slideCount}
      //   </span>
      // )}
    >
      {carouselImages.map(image => (
        <img key={image.url} src={image.url} alt="carousel image" />
      ))}
    </StyledCarousel>
  </Wrap>
);

export default ImageCarousel;
