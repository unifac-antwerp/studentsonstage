import React from "react";
import { Link } from "react-static";
import styled from "styled-components";
import Carousel from "nuka-carousel";

const ImageCarousel = ({ carouselImages }) => (
  <Carousel>
    {carouselImages.map(image => (
      <img key={image.url} src={image.url} alt="carouselImage" />
    ))}
  </Carousel>
);

export default ImageCarousel;
