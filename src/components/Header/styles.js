import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${props => props.theme.palette.white};
  position: relative;
  height: 80em;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 52em;
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
`;

export const Logo = styled.img`
  margin-top: 7.2em;
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

export const Info = styled.h2`
  font-size: 22px;
  font-weight: ${props => props.theme.fontWeights.medium};
  margin: 40px auto 80px;
`;

export const ImageLeft = styled.img`
  position: absolute;
  left: -10vw;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    left: -4vw;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    left: 0;
  }
`;

export const ImageRight = styled.img`
  position: absolute;
  right: -10vw;
  top: 6.4em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    right: -4vw;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    right: 0;
  }
`;
