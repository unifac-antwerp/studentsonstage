import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 32em;
`;

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 64px 0 24px;
`;

const Movie = styled.div`
  width: 100%;
`;

const Aftermovie = ({ title, aftermovie }) => (
  <Wrap>
    <ContentWrap>
      <Title>{title}</Title>
      <Movie dangerouslySetInnerHTML={{ __html: aftermovie.html }} />
    </ContentWrap>
  </Wrap>
);

export default Aftermovie;
