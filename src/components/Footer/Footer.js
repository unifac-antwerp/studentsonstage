import React from "react";
import { Link } from "react-static";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import getYear from "date-fns/get_year";
import Twemoji from "react-twemoji";
import Social from "./Social";

const Wrap = styled.footer`
  background-color: ${props => props.theme.palette.neutral02};
  margin-top: 4em;
  padding: 4em 0 2.4em;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    ${props => props.theme.textStyles.footer};
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 8em;
    padding: 3.2em 0 2.4em;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.containerSm};
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    width: ${props => props.theme.grid.container};
  }
`;

const GeneralWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  &:not(last-child) {
    margin-bottom: 16px;
  }

  :hover,
  address div:hover > p {
    color: ${props => props.theme.palette.neutral03};
  }
`;

const Address = styled.address`
  p:not(:last-child) {
    margin-bottom: 0;
  }
`;

const Copyright = styled.div`
  margin-top: 1.6em;

  span,
  a {
    font-size: 12px;
  }
`;

const CopyrightName = styled(Link)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${props => props.theme.palette.white};
    pointer-events: none;
    border-radius: 1px;
    visibility: hidden;
    transform: scaleX(0);
    transition: transform 200ms ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const StyledTwemoji = styled(Twemoji)`
  display: inline;
  font-size: 12px;

  .twemoji {
    width: 10px;
    height: 10px;
    margin: 0 2px;
  }
`;

const Footer = ({
  email,
  address,
  phoneNumber,
  addressLink,
  linkedinTitle,
  linkedinLink,
  facebookTitle,
  facebookLink,
  instagramTitle,
  instagramLink
}) => {
  const socials = [
    {
      key: "linkedin",
      title: linkedinTitle,
      link: linkedinLink
    },
    {
      key: "facebook",
      title: facebookTitle,
      link: facebookLink
    },
    {
      key: "instagram",
      title: instagramTitle,
      link: instagramLink
    }
  ];

  return (
    <Wrap>
      <ContentWrap>
        <GeneralWrap>
          <FooterLink to={`mailto:${email}`}>{email}</FooterLink>
          <FooterLink to={`tel:${phoneNumber}`}>{phoneNumber}</FooterLink>
          <FooterLink
            to={addressLink && addressLink.url}
            target="_blank"
            rel="noopener"
          >
            <Address>{RichText.render(address)}</Address>
          </FooterLink>
        </GeneralWrap>
        <ul>
          {socials &&
            socials.map(s => (
              <Social
                key={s.key}
                platform={s.key}
                title={s.title}
                link={s.link}
              />
            ))}
        </ul>
      </ContentWrap>
      <Copyright>
        <span>© Unifac {getYear(new Date())} - </span>
        <StyledTwemoji options={{ className: "twemoji" }}>
          Made with 💙 by{" "}
        </StyledTwemoji>
        <CopyrightName
          to="https://wouterlanduydt.be"
          target="_blank"
          rel="noopener"
        >
          Wouter Landuydt
        </CopyrightName>
      </Copyright>
    </Wrap>
  );
};

export default Footer;
