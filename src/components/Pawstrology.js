import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PetEl from './PetEl.js';
import { getPets, getQuoteList, getRandomWords } from '../api-utils.js';
import YelpRecs from './YelpRecs.js';
import { getRandomQuote } from '../utils.js';

export default class Gallery extends Component {
  state = {
    pets: [],
    quotes: [],
    quote: '',
    allWords: [],
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
<<<<<<< HEAD
    
    console.log(this.state.pets); }
=======

    const allWords = await getRandomWords();
    await this.setState({ allWords });

  }

>>>>>>> 96fbfcf69cbce197603f5b26f237a85608b06c72
  render() {
    const petsArray = this.state.pets;
    const quote = this.state.quote;
    const allWords = this.state.allWords;
    return (
      <div className="gallery-container">   
        {
          this.state.isLoading ?
            <Loader type="Circles" color="black" height={100} width={100} /> :
            petsArray.map(pet => <PetEl key={pet.id} {...pet} words={allWords} />)
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
