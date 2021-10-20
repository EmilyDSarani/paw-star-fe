import React, { Component } from 'react';
import PetEl from './PetEl.js';
import { getPets, getQuoteList } from '../api-utils.js';
import YelpRecs from './YelpRecs.js';
import { getRandomQuote } from '../utils.js';

export default class Gallery extends Component {
  state = {
    pets: [],
    quotes: [],
    quote: ''
  }

  componentDidMount = async () => {
    const pets = await getPets(this.props.token);
    await this.setState({ pets });

    const quotes = await getQuoteList();
    await this.setState({ quotes });

    const quote = await getRandomQuote(this.state.quotes);
    await this.setState({ quote });
  }
  render() {
    const petsArray = this.state.pets;
    const quote = this.state.quote;

    return (
      <div className="gallery-container">
        {
          petsArray.map(pet => <PetEl key={pet.id} {...pet} />)
        }
        <div>
          <YelpRecs/>
        </div>
        <div className="quote">
          <p>{quote.text}</p>
        </div>
      </div>
    );
  }
}
