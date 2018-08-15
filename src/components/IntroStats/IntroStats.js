import React from "react";
import styled from "styled-components";
import IntroStat from "./IntroStat";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;

  @media (min-width: 440px) {
    width: 80%;
  }

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: 70%;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const IntroStats = ({ stats }) => (
  <Wrap>
    {stats &&
      stats
        .slice(0, 3)
        .map((s, index) => (
          <IntroStat
            key={s.title}
            icon={s.icon.url}
            number={s.number}
            title={s.title}
            index={index + 1}
          />
        ))}
  </Wrap>
);

export default IntroStats;
