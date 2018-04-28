import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrap = styled.div`
  margin-left: 0.8em;
`;

const StyledCounter = styled(CountUp)`
  font-size: 22px;
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Title = styled.span`
  font-size: 2.2em;
`;

const IntroStat = ({ icon, number, title }) => (
  <Wrap>
    <img src={icon} alt="" />
    <ContentWrap>
      <h2>
        <StyledCounter
          start={0}
          end={number}
          duration={2}
          useEasing={true}
          separator="."
        />
      </h2>
      <Title>{title}</Title>
    </ContentWrap>
  </Wrap>
);

export default IntroStat;
