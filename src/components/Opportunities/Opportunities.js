import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import Opportunity from "./Opportunity";
import OrnamentImg from "../../assets/img/ornament_2.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  height: 44.8em;
  position: relative;
  margin-top: 32em;
`;

const Ornament = styled.img`
  position: absolute;
  top: -14.2em;
  right: 0;
`;

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
`;

const Title = styled.h1`
  padding: 64px 0 24px;
`;

const Desc = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.container};
  margin-bottom: 5.6em;
`;

const OpportunitiesWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container};
`;

const Opportunities = ({ title, desc, opportunities }) => (
  <Wrap>
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <ContentWrap>
      <Title>{title}</Title>
      <Desc>{RichText.render(desc)}</Desc>
    </ContentWrap>
    <OpportunitiesWrap>
      {opportunities.map(o => (
        <Opportunity
          key={o.title}
          icon={o.icon.url}
          title={o.title}
          desc={o.desc}
          ctaTitle={o.ctaTitle}
          ctaAction={o.ctaAction}
        />
      ))}
    </OpportunitiesWrap>
  </Wrap>
);

export default Opportunities;
