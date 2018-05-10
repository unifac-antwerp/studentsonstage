import React from "react";
import { Link } from "react-static";
import styled from "styled-components";
import Headroom from "react-headroom";
import Button from "../Button";

const StyledHeadroom = styled(Headroom)`
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .headroom--unfixed {
    background-color: ${props => props.theme.palette.white};
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    background-color: ${props => props.theme.palette.white};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-120%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`;

const Wrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 6.4em;
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm};

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const Title = styled(Link)`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.palette.global02};
  user-select: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

const ButtonMobile = styled.div`
  display: block;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const ButtonDesktop = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
  }
`;

const Navbar = ({ title, contactButton }) => (
  <StyledHeadroom disableInlineStyles>
    <Wrap>
      <h1>
        <Title to="/">{title}</Title>
      </h1>
      <ButtonDesktop>
        <Button link="/contact" text={contactButton} outlined="true" />
      </ButtonDesktop>
      <ButtonMobile>
        <Button link="/contact" text="Contact" outlined="true" />
      </ButtonMobile>
    </Wrap>
  </StyledHeadroom>
);

export default Navbar;
