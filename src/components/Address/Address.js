import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 16em;
  height: 32em;
`;

const Title = styled.h1`
  padding: 64px 0 24px;
`;

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
`;

const Desc = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.container};
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

const Address = ({ title, desc, address }) => (
  <Wrap>
    <ContentWrap>
      <Title>{title}</Title>
      <Desc>{RichText.render(desc)}</Desc>
      <StyledAddress>{RichText.render(address)}</StyledAddress>
    </ContentWrap>
  </Wrap>
);

export default Address;
