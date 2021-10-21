import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PetEl from './PetEl.js';
import { getPets, getQuoteList, getRandomWords } from '../api-utils.js';
import YelpRecs from './YelpRecs.js';
import { getRandomQuote } from '../utils.js';
import { Link } from 'react-router-dom';


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

    const allWords = await getRandomWords();
    await this.setState({ allWords });

  }

  render() {
    const petsArray = this.state.pets;
    const quote = this.state.quote;
    const allWords = this.state.allWords;
    return (
      <div className="gallery-container">   

        { //is state still loading? 
          this.state.isLoading ?
          //if so, show the spinner
            <Loader type="Circles" color="black" height={100} width={100} /> :
          //if not, check the length of the pets array=            
            petsArray.length > 0 ?
          //if the pets array is greater than 0, map through it to render pets
              petsArray.map(pet => <PetEl key={pet.id} {...pet} words={allWords} />) :
          //if not, show this message to the user
              <p className="no-pets-msg">We want to show you pawstrology here, but you haven't added any pets. Please go to <Link to='/pets'>Pets.</Link></p>
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
