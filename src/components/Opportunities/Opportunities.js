import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import Opportunity from "./Opportunity";
import OrnamentImg from "../../assets/img/ornament_2.png";

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  position: relative;
  margin-top: 24em;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 28em;
  }
`;

const Ornament = styled.img`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
    position: absolute;
    top: -14.2em;
    right: 0;
    transform-origin: 100% 50%;
    transform: scale(0.6);
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    transform: scale(1);
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

const Title = styled.h1`
  padding: 32px 0 24px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 72px 0 24px;
  }
`;

const Desc = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.containerSm};

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const OpportunitiesWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 64em;
  width: ${props => props.theme.grid.containerSm};
  position: relative;
  top: 5.6em;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: ${props => props.theme.grid.maxWidth};
    align-items: stretch;
    flex-direction: row;
  }
`;

const Opportunities = ({ title, desc, opportunities }) => (
  <Wrap>
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <ContentWrap>
      <Title>{title}</Title>
      <Desc>{desc && RichText.render(desc)}</Desc>
    </ContentWrap>
    <OpportunitiesWrap>
      {opportunities &&
        opportunities
          .slice(0, 3)
          .map(o => (
            <Opportunity
              key={o.title}
              icon={o.icon.url}
              title={o.title}
              desc={o.description}
              button={o.button}
              ctaAction={o.ctaAction}
            />
          ))}
    </OpportunitiesWrap>
  </Wrap>
);

export default Opportunities;
