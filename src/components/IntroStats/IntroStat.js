import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
    width: auto;
  }
`;

const ContentWrap = styled.div`
  margin-left: 0;
  margin-top: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
    margin-left: 0.8em;
    margin-top: 0;
  }
`;

const StyledCountUp = styled(CountUp)`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 2em;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2.2em;
  }
`;

const Title = styled.span`
  font-size: 2.2em;
  display: block;
  margin-top: 4px;
`;

const IntroStat = ({ icon, number, title }) => (
  <Wrap>
    <img src={icon} alt="" />
    <ContentWrap>
      <StyledCountUp
        start={0}
        end={number}
        duration={2}
        useEasing={true}
        separator="."
      />
      <Title>{title}</Title>
    </ContentWrap>
  </Wrap>
);

export default IntroStat;
