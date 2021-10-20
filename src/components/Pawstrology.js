import React, { Component } from 'react';
import PetEl from './PetEl.js';
import { getPets } from '../api-utils.js';
import YelpRecs from './YelpRecs.js';

export default class Gallery extends Component {
  state = {
    pets: []
  }

  componentDidMount = async () => {
    const pets = await getPets(this.props.token);
    await this.setState({ pets });
  }
  render() {
    const petsArray = this.state.pets;

    return (
      <div className="gallery-container">
        {
          petsArray.map(pet => <PetEl key={pet.id} {...pet} />)
        }
        <div>
          <YelpRecs/>
        </div>
      </div>
    );
  }
}
