import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return (
      <li key={breed}>
        <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
      </li>
    );
  }

  render() {
    const { dogBreeds, dataHasArrived } = this.props;

    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
        <ul>
          {dogBreeds
            .map(breed =>
              breed
                .split(" ")
                .map(
                  word => word[0].toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")
            )
            .map(this.renderDogBreed)}
        </ul>
      </div>
    );
  }
}
