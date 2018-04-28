import React from "react";
import styled from "styled-components";
import Headroom from "react-headroom";

const Wrap = styled.nav`
  background-color: red;
`;

const Navbar = ({ title, contactButton }) => (
  <Headroom>
    <Wrap>
      <p>{title}</p>
      <p>{contactButton}</p>
    </Wrap>
  </Headroom>
);

export default Navbar;
