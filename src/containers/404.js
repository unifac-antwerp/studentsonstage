import React from "react";
import { withRouteData } from "react-static";
import styled from "styled-components";
import Emoji from "react-emoji-render";
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

const StyledEmoji = styled(Emoji)`
  font-size: 64px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.palette.neutral01};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin: 32px 0 40px;
`;

const FourOFour = ({ navbar }) => (
  <Wrap>
    <Navbar {...navbar} />
    <ContentWrap>
      <StyledEmoji text="🙊" />
      <Title>Pagina niet gevonden</Title>
      <Button link="/" text="Naar de Homepage" />
    </ContentWrap>
  </Wrap>
);

export default withRouteData(FourOFour);
