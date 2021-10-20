import React, { Component } from 'react';
import { getHoroscope, getRandomWords } from '../api-utils.js';
import { compMessage } from '../utils.js';

export default class PetEl extends Component {
  state = {
    horoscope: '',
    words:[],
    doList:[],
    dontList:[] 
  }

  componentDidMount = async () => {
    const horoscope = await getHoroscope(this.props.sign);
    await this.setState({ horoscope });

    const words = await getRandomWords();
    await this.setState({ words });

    const doList = words.slice(0, 2);
    await this.setState({ doList });

    const dontList = words.slice(-2);
    await this.setState({ dontList });

  }


  render() {
    const hData = this.state.horoscope;
    const userSign = localStorage.getItem('USERSIGN');
    const compatibilityMessage = compMessage(userSign, hData.compatibility);
    const doList = this.state.doList;
    const dontList = this.state.dontList;

      // .filter(quote => quote.author !== 'Donald Trump');
    // console.log(typeof quotes);
    // const article = signArticle(this.props.sign);
    // const bffArticle = signArticle(hData.compatibility);
    return (
      <div className="pet-el">
        <img src={`../Icons/Pets/${this.props.type}.png`} id='img' alt={this.props.type} />
        <h2>{this.props.name} is a {this.props.sign}</h2>
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
        <div className="dos-donts">
          <div className="do-column">
            <h3>Do</h3>
            {doList.map(word => <p key={word.word}>{word.word}</p>)}
          </div>
          <div className="dont-column">
            <h3>Don't</h3>
            {dontList.map(word => <p key={word.word}>{word.word}</p>)}
          </div>
        </div>
      </div>
    );
  }
}
