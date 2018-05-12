import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import PeopleList from "./PeopleList/PeopleList";
import OrnamentImg from "../../assets/img/ornament_6.jpg";
import OrnamentImgSm from "../../assets/img/ornament_6_sm.jpg";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  position: relative;
`;

const Ornament = styled.img`
  display: none;

  @media (min-width: 820px) {
    display: block;
    position: absolute;
    top: 6.8em;
    right: 0;
    transform: scale(0.8);
    transform-origin: 100% 50%;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    transform: scale(1);
  }
`;

const OrnamentSm = styled.img`
  display: block;
  transform-origin: 100% 50%;
  position: absolute;
  right: 0;
  top: 0em;
  transform: scale(0.7);

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    top: 6.8em;
    transform: scale(0.8);
  }

  @media (min-width: 820px) {
    transform: scale(1);
    display: none;
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
  width: 72%;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: ${props => props.theme.grid.containerSm};
  }
`;

const PeopleListWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;
  position: relative;
  top: 6.4em;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const ContactUs = ({ title, desc, people }) => (
  <Wrap>
    <Ornament src={OrnamentImg} alt="" width="216 " height="358" />
    <OrnamentSm src={OrnamentImgSm} alt="" width="141" height="283" />
    <ContentWrap>
      <Title>{title}</Title>
      <Desc>{desc && RichText.render(desc)}</Desc>
    </ContentWrap>
    <PeopleListWrap>
      <PeopleList people={people} />
    </PeopleListWrap>
  </Wrap>
);

export default ContactUs;
