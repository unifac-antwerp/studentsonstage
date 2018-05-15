import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${props => props.theme.palette.white};
  position: relative;
  height: 65.6em;

  @media (min-width: 400px) {
    height: 72em;
  }

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    height: 80em;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 52em;
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

export const LogoWrap = styled.div`
  position: relative;
  margin-top: 7.2em;
  height: auto;
  width: 50vw;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 320px;
  }
`;

export const PoweredBy = styled.div`
  margin-top: 1.6em;

  p {
    font-size: 14px;
  }

  a {
    color: ${props => props.theme.palette.global01};
    font-weight: ${props => props.theme.fontWeights.medium};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Info = styled.span`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.palette.neutral01};
  font-family: ${props => props.theme.fonts.montserrat};
  margin: 40px auto 64px;
  text-align: center;

  @media (min-width: 410px) {
    font-size: 20px;
    margin: 40px auto 80px;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: 24px;
  }
`;

export const ImageLeft = styled.img`
  display: none;

  @media (min-width: 820px) {
    display: block;
    position: absolute;
    transform: scale(0.7);
    transform-origin: 0% 0%;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    transform: scale(0.9);
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    transform: scale(1);
  }
`;

export const ImageRight = styled.img`
  display: none;

  @media (min-width: 820px) {
    display: block;
    position: absolute;
    top: 6.4em;
    right: 0;
    transform: scale(0.7);
    transform-origin: 100% 50%;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    transform: scale(0.9);
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    transform: scale(1);
  }
`;

export const ImageLeftSm = styled.img`
  display: block;
  position: absolute;
  transform-origin: 0% 0%;
  transform: scale(0.5);

  @media (min-width: 500px) {
    transform: scale(0.8);
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    transform: scale(1);
  }

  @media (min-width: 820px) {
    display: none;
  }
`;

export const ImageRightSm = styled.img`
  display: block;
  position: absolute;
  right: 0;
  top: 26.4vw;
  transform-origin: 100% 50%;
  transform: scale(0.5);

  @media (min-width: 500px) {
    transform: scale(0.8);
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    top: 24em;
    transform: scale(1);
  }

  @media (min-width: 820px) {
    display: none;
  }
`;
