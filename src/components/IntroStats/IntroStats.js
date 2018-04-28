import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import IntroStat from "./IntroStat";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IntroStats = ({
  statOneIco,
  statOneTitle,
  statOneNumber,
  statTwoIco,
  statTwoTitle,
  statTwoNumber,
  statThreeIco,
  statThreeTitle,
  statThreeNumber
}) => (
  <Wrap>
    <IntroStat
      icon={statOneIco.url}
      number={statOneNumber}
      title={statOneTitle}
    />
    <IntroStat
      icon={statTwoIco.url}
      number={statTwoNumber}
      title={statTwoTitle}
    />
    <IntroStat
      icon={statThreeIco.url}
      number={statThreeNumber}
      title={statThreeTitle}
    />
  </Wrap>
);

export default IntroStats;
