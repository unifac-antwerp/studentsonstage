import React from "react";
import { Link } from "react-static";
import styled from "styled-components";

const StyledLink = styled(Link)`
  ${props => props.theme.textStyles.button};
  padding: 8px 16px;
  border-radius: 24px;
  transition: background-color 150ms, color 150ms, border 150ms;
  user-select: none;

  color: ${props =>
    props.outlined ? props.theme.palette.neutral01 : props.theme.palette.white};
  background-color: ${props =>
    props.outlined ? props.theme.palette.white : props.theme.palette.global01};
  border: 2px solid
    ${props =>
      props.outlined
        ? props.theme.palette.neutral01
        : props.theme.palette.global01};

  &:hover {
    color: ${props => props.theme.palette.white};
    background-color: ${props =>
      props.outlined
        ? props.theme.palette.neutral01
        : props.theme.palette.global02};
    border: 2px solid
      ${props =>
        props.outlined
          ? props.theme.palette.neutral01
          : props.theme.palette.global02};
  }
`;

const Button = ({ link, text, outlined }) => (
  <StyledLink to={link} outlined={outlined}>
    {text}
  </StyledLink>
);

export default Button;
