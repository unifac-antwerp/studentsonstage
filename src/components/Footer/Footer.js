import React from "react";
import { Link } from "react-static";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import getYear from "date-fns/get_year";
import Emoji from "react-emoji-render";
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
  :first-child {
    margin-bottom: 16px;
  }

  :hover {
    text-decoration: underline;
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

const Footer = ({
  email,
  address,
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
          <FooterLink to={addressLink.url} target="_blank">
            <Address>{RichText.render(address)}</Address>
          </FooterLink>
        </GeneralWrap>
        <ul>
          {socials.map(s => (
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
        <Emoji text="Made with 💙 by " />
        <FooterLink to="https://wouterlanduydt.be" target="_blank">
          Wouter Landuydt
        </FooterLink>
      </Copyright>
    </Wrap>
  );
};

export default Footer;
