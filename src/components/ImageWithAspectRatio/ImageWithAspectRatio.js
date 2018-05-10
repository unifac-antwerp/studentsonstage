import React from "react";
import styled from "styled-components";
import calculateAspectRatio from "../../helpers/calculateAspectRatio";

const Wrapper = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: ${props => calculateAspectRatio(props.width, props.height)};
  background-color: ${props =>
    props.loadingBackground ? props.theme.palette.loading : "transparent"};
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default ({ src, alt, width, height, className, loadingBackground }) => (
  <Wrapper width={width} height={height} loadingBackground={loadingBackground}>
    <Image src={src} alt={alt ? alt : ""} className={className} />
  </Wrapper>
);
