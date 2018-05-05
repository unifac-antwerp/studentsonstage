import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
  padding: 3.2em;
  background-color: ${props => props.theme.palette.white};
  border: 0.6em solid ${props => props.theme.palette.global01};
  ${props => props.theme.shadows.shadow01};
  border-radius: 0.8em;
  margin-top: -8em;
  position: relative;
`;

const StyledImage = styled.img`
  margin: 3.2em 0 6.4em;
`;

const Text = styled.div`
  p:first-child {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: 1.8em;
  }
`;

const Intro = ({ intro, logo }) => (
  <Wrap>
    <StyledImage src={logo.url} alt="unifac logo" />
    <Text>{RichText.render(intro)}</Text>
  </Wrap>
);

export default Intro;
