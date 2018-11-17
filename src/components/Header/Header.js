import React from 'react'
import { RichText } from 'prismic-reactjs'
import format from 'date-fns/format'
import {
  Wrap,
  ContentWrapper,
  LogoWrap,
  PoweredBy,
  Info,
  ImageLeft,
  ImageLeftSm,
  ImageRight,
  ImageRightSm,
} from './styles'
import IntroStats from '../IntroStats'
import imageLeft from '../../assets/img/img_left.jpg'
import imageLeftSm from '../../assets/img/img_left_sm.jpg'
import imageRight from '../../assets/img/img_right.jpg'
import imageRightSm from '../../assets/img/img_right_sm.jpg'
import ImageWithAspectRatio from '../ImageWithAspectRatio'

const Header = ({
  logo, poweredBy, date, location, stats,
}) => (
  <Wrap>
    <ImageLeft src={imageLeft} alt="" width="251" height="503" />
    <ImageLeftSm src={imageLeftSm} alt="" width="141" height="283" />
    <ContentWrapper>
      <LogoWrap>
        <ImageWithAspectRatio
          src={logo.url}
          alt="students on stage logo"
          width={276}
          height={252}
        />
      </LogoWrap>
      <PoweredBy>{poweredBy && RichText.render(poweredBy)}</PoweredBy>
      <Info>
        {date && format(date, 'D MMMM YYYY', { locale: 'nl' })} • {location}
      </Info>
      <IntroStats stats={stats} />
    </ContentWrapper>
    <ImageRight src={imageRight} alt="" width="205" height="708" />
    <ImageRightSm src={imageRightSm} alt="" width="141" height="283" />
  </Wrap>
)

export default Header
