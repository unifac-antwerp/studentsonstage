import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import ImageWithAspectRatio from '../ImageWithAspectRatio'

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${props => props.theme.grid.maxWidthSm};
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;
  padding: 1.6em;
  background-color: ${props => props.theme.palette.white};
  border: 4px solid ${props => props.theme.palette.global02};
  ${props => props.theme.shadows.shadow01};
  border-radius: 0.4em;
  margin-top: -8em;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 3.2em;
    border: 6px solid ${props => props.theme.palette.global02};
  }
`

const LogoWrap = styled.div`
  position: relative;
  margin: 3.2em 0 6.4em;
  width: 168px;
  height: auto;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: 212px;
  }
`

const Text = styled.div`
  width: 100%;

  p:first-child {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: 18px;
  }
`

const Intro = ({ intro, logo }) => (
  <Wrap>
    <h1 style={{ display: 'none' }}>Intro</h1>
    <LogoWrap>
      <ImageWithAspectRatio
        src={logo && logo.url}
        alt="unifac logo"
        width={212}
        height={211}
      />
    </LogoWrap>
    <Text>{intro && RichText.render(intro)}</Text>
  </Wrap>
)

export default Intro
