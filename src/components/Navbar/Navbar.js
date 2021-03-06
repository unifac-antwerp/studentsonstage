import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import Button from '../Button'
import ScrollProgressBar from '../ScrollProgressBar'

const StyledHeadroom = styled(Headroom)`
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
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
    transform: translateY(-64px);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0px);
  }
`

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
`

const Title = styled(Link)`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.palette.global01};
  user-select: none;

  &:hover {
    color: ${props => props.theme.palette.global02};
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 20px;
  }
`

const ButtonMobile = styled.div`
  display: ${props => (props.page === 'contact' ? 'none' : 'block')};

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`

const ButtonDesktop = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: ${props => (props.page === 'contact' ? 'none' : 'block')};
  }
`

const Navbar = ({ title, contactButton, page }) => (
  <StyledHeadroom disableInlineStyles>
    <Wrap>
      <h1>
        <Title to="/">{title}</Title>
      </h1>
      <ButtonDesktop page={page}>
        <Button link="/contact" text={contactButton} outlined="true" />
      </ButtonDesktop>
      <ButtonMobile page={page}>
        <Button link="/contact" text="Contact" outlined="true" />
      </ButtonMobile>
    </Wrap>
    {page === 'home' && <ScrollProgressBar />}
  </StyledHeadroom>
)

export default Navbar
