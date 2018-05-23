import React from "react";
import { Link } from "react-static";
import styled from "styled-components";

const StyledLink = styled(Link)`
  ${props => props.theme.textStyles.button};
  padding: ${props => (props.big ? "10px 28px" : "6px 20px")};
  ${props => props.big && "font-size: 16px"};
  border-radius: 64px;
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

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: ${props => (props.big ? "14px 32px" : "8px 24px")};
    ${props => props.big && "font-size: 18px"};
  }
`;

const Button = ({ link, text, outlined, big, target }) => (
  <StyledLink
    to={link}
    outlined={outlined}
    big={big}
    target={target}
    rel="noopener"
  >
    {text}
  </StyledLink>
);

export default Button;
