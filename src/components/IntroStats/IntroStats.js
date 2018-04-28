import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Stat = styled.span`
  font-size: 4em;
  display: block;
`;

const StyledCounter = styled(CountUp)`
  font-size: 4em;
  display: block;
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
  <div>
    <StyledCounter
      start={0}
      end={statOneNumber}
      duration={2}
      useEasing={true}
      separator="."
    />
    <Stat>{statOneTitle}</Stat>
    <StyledCounter
      start={0}
      end={statTwoNumber}
      duration={2}
      useEasing={true}
      separator="."
    />
    <Stat>{statTwoTitle}</Stat>
    <StyledCounter
      start={0}
      end={statThreeNumber}
      duration={2}
      useEasing={true}
      separator="."
    />
    <Stat>{statThreeTitle}</Stat>
  </div>
);

export default IntroStats;
