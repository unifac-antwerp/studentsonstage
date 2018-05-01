import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import PeopleList from "./PeopleList";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  height: 48em;
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

const ContactUs = ({ title, desc, people }) => (
  <Wrap>
    <ContentWrap>
      <Title>{title}</Title>
      <Desc>{RichText.render(desc)}</Desc>
    </ContentWrap>
    <PeopleList people={people} />
  </Wrap>
);

export default ContactUs;
