import styled from 'styled-components'

const StyledArrow = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    z-index: 1;
    top: 48%;
    transform: ${props =>
    props.direction === 'next' ? 'rotate(180deg)' : 'none'};
    margin: ${props =>
    props.direction === 'next' ? '0 1.6em 0 0' : '0 0 0 1.6em'};
    ${props => props.direction === 'prev' && 'left: 0;'};
    ${props => props.direction === 'next' && 'right: 0;'};
    transition: transform 150ms;

    :hover {
      cursor: pointer;
      transform: ${props =>
    props.direction === 'next'
      ? 'rotate(180deg) scale(1.2)'
      : 'scale(1.2)'};
    }
  }
`

export default StyledArrow
