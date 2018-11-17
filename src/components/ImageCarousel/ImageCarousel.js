import React, { Component } from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import LazyLoad from 'react-lazyload'
import 'react-image-gallery/styles/css/image-gallery.css'
import StyledArrow from './controls/Arrow'
import Arrow from '../../assets/svg/arrow.svg'
import OrnamentImg from '../../assets/img/ornament_1.png'

const Wrap = styled.section`
  background-color: ${props => props.theme.palette.white};
  margin-top: 8em;
  margin-bottom: 14.4em;
  height: 56vw;
  position: relative;

  .image-gallery-thumbnail.active {
    border: 4px solid ${props => props.theme.palette.global02};
  }

  .image-gallery-thumbnails {
    padding: 5px 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 11.2em;
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    height: 72em;
  }
`

const ContentWrap = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm} !important;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: ${props => props.theme.grid.container} !important;
  }
`

const Ornament = styled.img`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
    position: absolute;
    top: -14.2em;
    transform-origin: 0% 50%;
    transform: scale(0.6);
  }

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    transform: scale(1);
  }
`

const Title = styled.h1`
  padding: 32px 0 24px;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 72px 0 24px;
  }
`

class ImageCarousel extends Component {
  navRenderer = (direction, onClick) => (
    <StyledArrow direction={direction} src={Arrow} onClick={onClick} />
  );

  render () {
    const { title, images } = this.props

    return (
      <Wrap>
        <LazyLoad once offset={250} height="auto">
          <Ornament src={OrnamentImg} alt="" width="141" height="283" />
        </LazyLoad>
        <ContentWrap>
          <Title>{title}</Title>
          <LazyLoad once offset={150} height="auto">
            <ImageGallery
              items={
                images &&
                images.map((i, index) => ({
                  original: i.image.url,
                  originalAlt: `Carousel image ${index}`,
                  thumbnail: i.image.url,
                  thumbnailAlt: '',
                }))
              }
              lazyLoad
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay
              renderLeftNav={onClick => this.navRenderer('prev', onClick)}
              renderRightNav={onClick => this.navRenderer('next', onClick)}
            />
          </LazyLoad>
        </ContentWrap>
      </Wrap>
    )
  }
}

export default ImageCarousel
