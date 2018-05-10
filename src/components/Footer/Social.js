import React from "react";
import { Link } from "react-static";
import styled from "styled-components";
import facebookIco from "../../assets/svg/facebook.svg";
import linkedinIco from "../../assets/svg/linkedin.svg";
import instagramIco from "../../assets/svg/instagram.svg";

const Wrap = styled.li`
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const Icon = styled.img`
  margin-right: 6px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  :hover {
    text-decoration: underline;
  }
`;

const Social = ({ platform, title, link }) => {
  let icon;

  switch (platform) {
    case "facebook":
      icon = facebookIco;
      break;
    case "linkedin":
      icon = linkedinIco;
      break;
    case "instagram":
      icon = instagramIco;
      break;
    default:
      icon = null;
  }

  return (
    <Wrap>
      <StyledLink to={link && link.url} target="_blank" rel="noopener">
        <Icon src={icon} alt="" />
        <span>{title}</span>
      </StyledLink>
    </Wrap>
  );
};

export default Social;
