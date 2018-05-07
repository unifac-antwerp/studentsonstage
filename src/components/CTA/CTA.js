import React from "react";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import Button from "../Button";
import OrnamentImg from "../../assets/img/ornament_4.png";

const Wrap = styled.section`
  margin-top: 16em;
  background-color: ${props => props.theme.palette.white};
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 24em;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;
  text-align: center;
  padding: 4em 0;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
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

const Title = styled.h1`
  color: ${props => props.theme.palette.neutral01};
`;

const Desc = styled.div`
  max-width: ${props => props.theme.grid.maxWidthSm};
  margin: 2.4em 0 3.2em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    flex-direction: row;
  }

  a:first-child {
    margin-right: 0;
    margin-bottom: 16px;

    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      margin-right: 16px;
      margin-bottom: 0;
    }
  }
`;

const CTA = ({
  title,
  desc,
  button,
  buttonLink,
  secondaryButton,
  secondaryButtonLink
}) => (
  <Wrap>
    <Ornament src={OrnamentImg} alt="" width="141" height="283" />
    <ContentWrapper>
      <Title>{title}</Title>
      <Desc>{RichText.render(desc)}</Desc>
      <ButtonWrapper>
        <Button
          link={buttonLink ? buttonLink : "/contact"}
          text={button}
          big="true"
        />
        {secondaryButton && (
          <Button
            link={secondaryButtonLink}
            text={secondaryButton}
            outlined="true"
            big="true"
          />
        )}
      </ButtonWrapper>
    </ContentWrapper>
  </Wrap>
);

export default CTA;
