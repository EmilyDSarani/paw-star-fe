import React, { Component } from 'react';

export default class PetEl extends Component {

  render() {
    return (
      <div className="pet-el">
        <p>{this.props.name}</p>
      </div>
    );
  }
}
