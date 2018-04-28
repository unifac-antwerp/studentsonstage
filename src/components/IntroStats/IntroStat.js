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

const Title = styled.span`
  font-size: 2.2em;
  display: block;
  margin-top: 4px;
`;

const IntroStat = ({ icon, number, title }) => (
  <Wrap>
    <img src={icon} alt="" />
    <ContentWrap>
      <h3>
        <CountUp
          start={0}
          end={number}
          duration={2}
          useEasing={true}
          separator="."
        />
      </h3>
      <Title>{title}</Title>
    </ContentWrap>
  </Wrap>
);

export default IntroStat;
