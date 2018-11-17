import React, { PureComponent } from 'react'
import { Link } from 'react-static'
import { compose, withProps } from 'recompose'
import styled from 'styled-components'
import { RichText } from 'prismic-reactjs'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'
import mapStyle from '../../assets/data/mapStyle'

const Title = styled.span`
  font-family: ${props => props.theme.fonts.montserrat};
  display: inline-block;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 500;
`

const StyledAddress = styled.address`
  p {
    margin: 0 !important;
  }
`

const StyledLink = styled(Link)`
  font-size: 14px;
  display: inline-block;
  margin-top: 8px;
`

const InfoWindowContent = ({ address }) => (
  <div>
    <Title>Unifac Vzw</Title>
    <StyledAddress>{address && RichText.render(address)}</StyledAddress>
    <StyledLink
      to="https://www.google.com/maps?saddr=Current+Location&daddr=Unifac+antwerpen"
      target="_blank"
      rel="noopener"
      >
        Routebeschrijving
    </StyledLink>
  </div>
)

class Map extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render () {
    const { open } = this.state
    const { address } = this.props

    const unifacPosition = {
      lat: 51.2240769,
      lng: 4.4119039,
    }

    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{
          lat: unifacPosition.lat + 0.0005,
          lng: unifacPosition.lng,
        }}
        defaultOptions={{ styles: mapStyle }}
      >
        <Marker
          position={unifacPosition}
          onClick={() => this.setState({ open: !open })}
        >
          {open && (
            <InfoWindow onCloseClick={() => this.setState({ open: false })}>
              <InfoWindowContent address={address} />
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    )
  }
}

const enhance = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyA_1_q-OqWsqBwZGMEYW378g-uvg23JvTo&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)

export default enhance(Map)
