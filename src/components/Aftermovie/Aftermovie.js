import React from "react";
import LazyLoad from "react-lazyload";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import OrnamentImg from "../../assets/img/ornament_3.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  height: 40vw;
  position: relative;
  margin-top: 9.6em;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 15.2em;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 17.6em;
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    height: 52em;
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

const Movie = styled.div`
  width: 100%;
  background-color: ${props => props.theme.palette.loading};

  position: relative;
  padding-bottom: 44.82%;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Aftermovie = ({ title, aftermovie }) => (
  <Wrap>
    <LazyLoad once offset={250} height={"auto"}>
      <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    </LazyLoad>
    <ContentWrap>
      <Title>{title}</Title>
      <Movie
        dangerouslySetInnerHTML={{ __html: aftermovie && aftermovie.html }}
      />
    </ContentWrap>
  </Wrap>
);

export default Aftermovie;
