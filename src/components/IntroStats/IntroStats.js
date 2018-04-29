import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import IntroStat from "./IntroStat";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IntroStats = ({ stats }) => (
  <Wrap>
    {stats.map(s => (
      <IntroStat
        key={s.title}
        icon={s.icon.url}
        number={s.number}
        title={s.title}
      />
    ))}
  </Wrap>
);

export default IntroStats;
