import React from "react";
import { compose, withProps } from "recompose";
import styled from "styled-components";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import mapStyle from "../../assets/data/mapStyle";

const unifacPosition = {
  lat: 51.2240769,
  lng: 4.4119039
};

const Map = props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={unifacPosition}
    defaultOptions={{ styles: mapStyle }}
  >
    <Marker position={unifacPosition} />
  </GoogleMap>
);

const enhance = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_1_q-OqWsqBwZGMEYW378g-uvg23JvTo&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
);

export default enhance(Map);
