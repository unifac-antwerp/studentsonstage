import React from "react";
import { Link } from "react-static";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import getYear from "date-fns/get_year";
import Emoji from "react-emoji-render";
import Social from "./Social";

const Wrap = styled.footer`
  background-color: ${props => props.theme.palette.neutral01};
  margin-top: 8em;
  padding: 3.2em 0;

  * {
    ${props => props.theme.textStyles.footer};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: ${props => props.theme.grid.maxWidth};
  width: ${props => props.theme.grid.container};
  margin: 0 auto;
`;

const FooterLink = styled(Link)`
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Address = styled.address`
  p:not(:last-child) {
    margin-bottom: 0;
  }
`;

const Socials = styled.ul``;

const Copyright = styled.div`
  span,
  a {
    font-size: 12px;
  }
`;

const Footer = ({ footer }) => {
  const {
    email,
    address,
    addressLink,
    linkedinTitle,
    linkedinLink,
    facebookTitle,
    facebookLink,
    instagramTitle,
    instagramLink
  } = footer;

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
      <ContentWrapper>
        <div>
          <FooterLink href={`mailto:${email}`}>{email}</FooterLink>
          <FooterLink href={addressLink.url} target="_blank">
            <Address>{RichText.render(address)}</Address>
          </FooterLink>
        </div>
        <Copyright>
          <span>© Unifac {getYear(new Date())} - </span>
          <Link to="https://wouterlanduydt.be" target="_blank">
            <Emoji text="Made with <3 by Wouter Landuydt" />
          </Link>
        </Copyright>
        <Socials>
          {socials.map(s => (
            <Social
              key={s.key}
              platform={s.key}
              title={s.title}
              link={s.link}
            />
          ))}
        </Socials>
      </ContentWrapper>
    </Wrap>
  );
};

export default Footer;
