import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PetEl from './PetEl.js';
import { getPets, getQuoteList } from '../api-utils.js';
import YelpRecs from './YelpRecs.js';
import { getRandomQuote } from '../utils.js';

export default class Gallery extends Component {
  state = {
    pets: [],
    quotes: [],
    quote: '',
    isLoading: false
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    const pets = await getPets(this.props.token);
    await this.setState({ pets, isLoading: false });

    const quotes = await getQuoteList();
    await this.setState({ quotes });

    const quote = await getRandomQuote(this.state.quotes);
    await this.setState({ quote });
    
    console.log(this.state.pets); }
  render() {
    const petsArray = this.state.pets;
    const quote = this.state.quote;
    return (
      <div className="gallery-container">
        
        {
          this.state.isLoading ?
            <Loader type="Circles" color="black" height={100} width={100} /> :
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
