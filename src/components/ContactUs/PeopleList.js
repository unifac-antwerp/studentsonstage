import React, { PureComponent } from "react";
import { Link } from "react-static";
import styled from "styled-components";
import IcoEmail from "../../assets/svg/ico_email.svg";
import IcoPhone from "../../assets/svg/ico_phone.svg";
import IcoLinkedin from "../../assets/svg/ico_linkedin.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 696px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const ThumbnailList = styled.ul`
  display: flex;
  margin: 0 0 0.8em 0.8em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: block;
    margin: 0.8em 0.8em 0 0;
  }
`;

const Thumbnail = styled.li`
  padding: 0.4em;
  background-color: ${props => props.theme.palette.white};
  ${props => props.theme.shadows.shadow02};
  border-radius: 0.4em;
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
    border-radius: 0.4em;
  }
`;

const MainImage = styled.img`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: block;
    border-radius: 0.8em 0 0 0.8em;
    margin: 0.8em;
    width: auto;
    height: 32vw;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: auto;
  }
`;

const PersonWrap = styled.div`
  display: flex;
  border-radius: 0.8em;
  background-color: ${props => props.theme.palette.white};
  ${props => props.theme.shadows.shadow02};
  width: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.6em;
  min-height: 17.6em;

  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    min-height: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 1.6em 0.8em;
  }
`;

const Position = styled.span`
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const ContactItem = styled.li`
  ${props => props.theme.textStyles.paragraph};
  display: flex;
  align-items: center;

  :first-child {
    margin-top: 24px;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  a {
    color: ${props => props.theme.palette.neutral01};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactItemIcon = styled.img`
  margin-right: 8px;
  height: 16px;
  width: 16px;
`;

class PeopleList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: this.props.people[0] || {}
    };
  }

  handleThumbnailClick = person => {
    this.setState({ selectedPerson: person });
  };

  render() {
    const { people } = this.props;
    const { selectedPerson } = this.state;

    return (
      <Wrap>
        <ThumbnailList>
          {people &&
            people.slice(0, 4).map(p => (
              <Thumbnail
                key={`${p.firstname}${p.lastname}`}
                onClick={() => this.handleThumbnailClick(p)}
                active={p === selectedPerson}
              >
                <img src={p.thumbnailImage.url} alt="" className="image" />
              </Thumbnail>
            ))}
        </ThumbnailList>
        {selectedperson && (
          <PersonWrap>
            <MainImage
              src={selectedPerson.mainImage.url}
              alt={`image ${selectedPerson.firstname}`}
            />
            <ContentWrap>
              <h2>
                {selectedPerson.firstname} {selectedPerson.lastname}
              </h2>
              <Position>{selectedPerson.position}</Position>
              <ul>
                <ContactItem>
                  <ContactItemIcon src={IcoEmail} alt="" />
                  <Link to={`mailto:${selectedPerson.email}`}>
                    {selectedPerson.email}
                  </Link>
                </ContactItem>
                <ContactItem>
                  <ContactItemIcon src={IcoPhone} alt="" />
                  <Link to={`tel:${selectedPerson.phone}`}>
                    {selectedPerson.phone}
                  </Link>
                </ContactItem>
                <ContactItem>
                  <ContactItemIcon src={IcoLinkedin} alt="" />
                  <Link to={selectedPerson.linkedinLink.url} target="_blank">
                    {selectedPerson.linkedinTitle}
                  </Link>
                </ContactItem>
              </ul>
            </ContentWrap>
          </PersonWrap>
        )}
      </Wrap>
    );
  }
}

export default PeopleList;
