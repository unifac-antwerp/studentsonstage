import React, { Component } from "react";
import styled from "styled-components";

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: 1
    };
  }

  handleThumbnailClick = clickedThumb => {
    this.setState({ selectedPerson: clickedThumb });
  };

  render() {
    const { people } = this.props;
    const { selectedPerson } = this.state;

    // set people id's
    for (let i = 0; i < people.length; i++) {
      people[i].id = i;
    }

    return (
      <div>
        {people
          .slice(0, 4)
          .map(p => (
            <img
              onClick={() => this.handleThumbnailClick(p.id)}
              src={p.thumbnailImage.url}
              alt=""
            />
          ))}
        <div>
          <img
            src={people[selectedPerson].mainImage.url}
            alt={`image ${people[selectedPerson].firstname}`}
          />
          <span>
            {people[selectedPerson].firstname} {people[selectedPerson].lastname}
          </span>
          <span>{people[selectedPerson].position}</span>
          <span>{people[selectedPerson].email}</span>
          <span>{people[selectedPerson].linkedinTitle}</span>
          <span>{people[selectedPerson].linkedinLink.url}</span>
        </div>
      </div>
    );
  }
}

export default PeopleList;
