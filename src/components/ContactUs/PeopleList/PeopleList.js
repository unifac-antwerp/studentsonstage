import React, { PureComponent } from "react";
import { Link } from "react-static";
import {
  Wrap,
  ThumbnailList,
  Thumbnail,
  MainImageWrap,
  PersonWrap,
  ContentWrap,
  Position,
  ContactItem,
  ContactItemIcon
} from "./styles";
import ImageWithAspectRatio from "../../ImageWithAspectRatio";
import IcoEmail from "../../../assets/svg/ico_email.svg";
import IcoPhone from "../../../assets/svg/ico_phone.svg";
import IcoLinkedin from "../../../assets/svg/ico_linkedin.svg";

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

  renderThumbnails = (people, selectedPerson) => (
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
  );

  renderPersonDetails = selectedPerson => (
    <PersonWrap>
      <MainImageWrap>
        <ImageWithAspectRatio
          src={selectedPerson.mainImage.url}
          alt={`image ${selectedPerson.firstname}`}
          width={200}
          height={304}
          loadingBackground="true"
        />
      </MainImageWrap>
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
            <Link
              to={selectedPerson.linkedinLink.url}
              target="_blank"
              rel="noopener"
            >
              {selectedPerson.linkedinTitle}
            </Link>
          </ContactItem>
        </ul>
      </ContentWrap>
    </PersonWrap>
  );

  render() {
    const { people } = this.props;
    const { selectedPerson } = this.state;

    return (
      <Wrap>
        {people && this.renderThumbnails(people, selectedPerson)}
        {selectedPerson && this.renderPersonDetails(selectedPerson)}
      </Wrap>
    );
  }
}

export default PeopleList;
