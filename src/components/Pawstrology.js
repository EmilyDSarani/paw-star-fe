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

    // since these 3 are independent they can fire off at the same time
    const [pets, quotes, allWords] = await Promise.all([
      getPets(this.props.token),
      getQuoteList(),
      getRandomWords()
    ])

    await this.setState({ pets, quotes, allWords, isLoading: false });

    // but this function has to wait until the quotes are fetched
    const quote = await getRandomQuote(this.state.quotes);
    await this.setState({ quote });

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
