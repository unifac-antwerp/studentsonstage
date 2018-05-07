import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import OrnamentImg from "../../assets/img/ornament_5.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 12em;
  height: 32em;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 16em;
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

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const Desc = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.containerSm};

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
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
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <ContentWrap>
      <Title>{title}</Title>
      <Desc>{RichText.render(desc)}</Desc>
      <StyledAddress>{RichText.render(address)}</StyledAddress>
    </ContentWrap>
  </Wrap>
);

export default Address;
