import React from "react";
import { withRouteData } from "react-static";
import styled from "styled-components";
import Twemoji from "react-twemoji";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Wrap = styled.div``;

const ContentWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;
  margin-top: 80px;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.palette.neutral01};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin: 32px 0 40px;
`;

const FourOFour = ({ navbar }) => (
  <Wrap>
    <Helmet>
      <title>404 - Students on Stage</title>
    </Helmet>
    <Navbar {...navbar} />
    <main>
      <ContentWrap>
        <Twemoji>🔍</Twemoji>
        <Title>Pagina niet gevonden</Title>
        <Button link="/" text="Naar de Homepage" />
      </ContentWrap>
    </main>
  </Wrap>
);

export default withRouteData(FourOFour);
