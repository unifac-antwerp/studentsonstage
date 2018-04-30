import React from "react";
import { withRouteData } from "react-static";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import BrokenLink from "../assets/svg/broken_link.svg";

const Wrap = styled.div``;

const ContentWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
  margin-top: 80px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.palette.neutral01};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin: 24px 0 40px;
`;

const FourOFour = ({ navbar }) => (
  <Wrap>
    <Navbar {...navbar} />
    <ContentWrap>
      <img src={BrokenLink} alt="" width="79" height="79" />
      <Title>Pagina niet gevonden</Title>
      <Button link="/" text="Naar de Homepage" />
    </ContentWrap>
  </Wrap>
);

export default withRouteData(FourOFour);
