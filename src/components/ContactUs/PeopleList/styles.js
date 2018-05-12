import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 696px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const ThumbnailList = styled.ul`
  display: flex;
  margin: 0 0 0.8em 0.8em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    margin: 0.8em 0.8em 0 0;
  }
`;

export const Thumbnail = styled.li`
  padding: 0.4em;
  background-color: ${props => props.theme.palette.white};
  ${props => props.theme.shadows.shadow02};
  border-radius: 0.2em;
  transition: transform 150ms ease-out;
  transform: ${props => (props.active ? "scale(1.05)" : "scale(0.95)")};

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: 0;
    margin-right: 0.6em;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      margin-bottom: 0.6em;
      margin-right: 0;
    }
  }

  .image {
    display: block;
    border-radius: 0.2em;
    height: 56px;
    width: 56px;
    background-color: ${props => props.theme.palette.loading};
  }
`;

export const MainImageWrap = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    position: relative;
    overflow: hidden;
    display: block;
    border-radius: 0.4em 0 0 0.4em;
    margin: 0.8em;
    width: 21vw;
    height: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: auto;
    width: 200px;
  }
`;

export const PersonWrap = styled.div`
  display: flex;
  border-radius: 0.4em;
  background-color: ${props => props.theme.palette.white};
  ${props => props.theme.shadows.shadow02};
  width: 100%;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.6em;
  min-height: 20em;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    min-height: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 1.6em 0.8em;
  }
`;

export const Position = styled.span`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

export const ContactItem = styled.li`
  ${props => props.theme.textStyles.paragraph};
  display: flex;
  align-items: center;

  :first-child {
    margin-top: 24px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  a {
    color: ${props => props.theme.palette.neutral01};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContactItemIcon = styled.img`
  margin-right: 8px;
  height: 16px;
  width: 16px;
`;
