import React from "react";
import { Link } from "react-static";
import styled from "styled-components";

const StyledLink = styled(Link)`
  ${props => props.theme.textStyles.button};
  color: ${props => props.theme.palette.neutral01};
  padding: 8px 16px;
  border: 2px solid ${props => props.theme.palette.neutral01};
  border-radius: 24px;
  transition: background-color 150ms, color 150ms;
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.palette.neutral01};
    color: ${props => props.theme.palette.neutral10};
  }
`;

const Button = ({ link, text }) => <StyledLink to={link}>{text}</StyledLink>;

export default Button;
