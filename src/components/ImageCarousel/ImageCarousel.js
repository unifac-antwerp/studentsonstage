import React from "react";
import { Link } from "react-static";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Carousel from "nuka-carousel";
import StyledArrow from "./controls/Arrow";
import Arrow from "../../assets/svg/arrow.svg";
import OrnamentImg from "../../assets/img/ornament_1.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 8em;
  margin-bottom: 14.4em;
  height: 56vw;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 11.2em;
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    height: 72em;
  }
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

const ImageCarousel = ({ title, images }) => (
  <Wrap>
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <ContentWrap>
      <Title>{title}</Title>
      <LazyLoad height={400} offset={150}>
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
          {images &&
            images.map(i => (
              <img
                key={i.image.url}
                src={i.image.url}
                alt="carousel image"
                // manually trigger resize onLoad to make sure carousel shows at correct height
                onLoad={() => {
                  window.dispatchEvent(new Event("resize"));
                }}
              />
            ))}
        </Carousel>
      </LazyLoad>
    </ContentWrap>
  </Wrap>
);

export default ImageCarousel;
