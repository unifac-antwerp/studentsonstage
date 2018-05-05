import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import OrnamentImg from "../../assets/img/ornament_3.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 32em;
  height: 52em;
  position: relative;
`;

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
`;

const Ornament = styled.img`
  position: absolute;
  top: -14.2em;
`;

const Title = styled.h1`
  padding: 72px 0 24px;
`;

const Movie = styled.div`
  width: 100%;

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
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <ContentWrap>
      <Title>{title}</Title>
      <Movie dangerouslySetInnerHTML={{ __html: aftermovie.html }} />
    </ContentWrap>
  </Wrap>
);

export default Aftermovie;
