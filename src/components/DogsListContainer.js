import React, { Component } from "react";
import request from "superagent";
import DogsList from "./DogsList";

export default class DogsListContainer extends Component {
  state = { dogBreeds: [], dataHasArrived: false };

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const breeds = Object.keys(response.body.message);
        this.updateBreeds(breeds);
      })
      .catch(console.error);
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds,
      dataHasArrived: true
    });
  }

  render() {
    return (
      <DogsList
        dogBreeds={this.state.dogBreeds}
        dataHasArrived={this.state.dataHasArrived}
      />
    );
  }
}
