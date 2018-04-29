import styled from "styled-components";

const StyledArrow = styled.img`
  transform: ${props => (props.next ? "rotate(180deg)" : "none")};
  margin: ${props => (props.next ? "0 1.6em 0 0" : "0 0 0 1.6em")};
  transition: transform 150ms;

  :hover {
    cursor: pointer;
    transform: ${props =>
      props.next ? "rotate(180deg) scale(1.2)" : "scale(1.2)"};
  }
`;

export default StyledArrow;
