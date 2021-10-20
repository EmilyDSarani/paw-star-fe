import React, { Component } from 'react';
import { getHoroscope, getQuoteList } from '../api-utils.js';
import { compMessage } from '../utils.js';
export default class PetEl extends Component {
  state = {
    horoscope: '',
    quotes: []
  }

  componentDidMount = async () => {
    const horoscope = await getHoroscope(this.props.sign);
    await this.setState({ horoscope });

    const quotes = await getQuoteList();
    await this.setState({ quotes });
  }

   
  render() {
    const hData = this.state.horoscope;
    const userSign = localStorage.getItem('USERSIGN');
    const compatibilityMessage = compMessage(userSign, this.props.sign);
    const quotes = this.state.quotes;
      // .filter(quote => quote.author !== 'Donald Trump');
    console.log(quotes);
    // const article = signArticle(this.props.sign);
    // const bffArticle = signArticle(hData.compatibility);
    return (
      <div className="pet-el">
        <img src={`../Icons/Pets/${this.props.type}.png`} id='img' alt={this.props.type} />
        <h2>{this.props.name} is a {this.props.sign}</h2>
        <p>{quotes.text}</p>
        {/* <div className="zodiac"> */}
        {/* <h3>is a {this.props.sign}</h3> */}

        {/* </div> */}
        <hr></hr>
        <img className='smaller-images' src={`../Icons/ZodiacRep2/${this.props.sign}.png`} id='img' alt={this.props.sign}/>
        <h3>Today</h3>
        <p>Mood: {hData.mood}</p>
        <p>Color: {hData.color}</p>
        <p>{this.props.name}'s BFF is a {hData.compatibility}.</p>
        <hr></hr>
        <img className='smaller-images' src='../Icons/Pets/paws.png' alt='paw'/>
        <h3>What {this.props.name} is paw-ndering today:</h3>
        <p>{hData.description}</p>
        <hr></hr>
        <img className='smaller-images' src='../Icons/Pets/bell.png' alt='paw'/>
        <h3>Your day together</h3>
        <p>{compatibilityMessage}</p>
        <hr></hr>
    
        <h3>Do | Don't</h3>
        <p>Placeholder text for dos and don'ts. Needs to be restructured into columns</p>
      </div>
    );
  }
}
