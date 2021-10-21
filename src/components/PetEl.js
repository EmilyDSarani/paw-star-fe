import React, { Component } from 'react';
import { getHoroscope } from '../api-utils.js';
import { compMessage, getThreeWords, correctArticle } from '../utils.js';

export default class PetEl extends Component {
  state = {
    horoscope: '',
    threeWordsDont:[],
    threeWordsDo:[] 
  }

  componentDidMount = async () => {
    const horoscope = await getHoroscope(this.props.sign);
    await this.setState({ horoscope });
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props.words.length !== prevProps.words.length) {
      const origArray = this.props.words;
      const wordArrayOne = origArray.slice(0, Math.floor(origArray.length / 2));
      const wordArrayTwo = origArray.slice(Math.floor((origArray.length / 2) + 1));

      const threeWordsDo = await getThreeWords(wordArrayOne);
      await this.setState({ threeWordsDo });
  
      const threeWordsDont = await getThreeWords(wordArrayTwo);
      await this.setState({ threeWordsDont });
    }
  }

  render() {
    const hData = this.state.horoscope;
    const userSign = localStorage.getItem('USERSIGN');
    const compatibilityMessage = compMessage(userSign, hData.compatibility);
    const doList = this.state.threeWordsDo;
    const dontList = this.state.threeWordsDont;
    return (
      <div className="pet-el" id={this.props.id}>
        
        <img src={`../Icons/Pets/${this.props.type}.png`} id='img' alt={this.props.type} />
        <h2>{this.props.name} is {correctArticle(this.props.sign)} {this.props.sign}</h2>
        <hr/>

        <img className='smaller-images' src={`../Icons/ZodiacRep2/${this.props.sign}.png`} id='img' alt={this.props.sign}/>
        <h3>Today</h3>
        <p>Mood: {hData.mood}</p>
        <p>Color: {hData.color}</p>
        <p>{this.props.name}'s BFF is {correctArticle(String(hData.compatibility))} {hData.compatibility}.</p>
        <hr/>

        <img className='smaller-images' src='../Icons/Pets/paws.png' alt='paw'/>
        <h3>What {this.props.name} is paw-ndering today:</h3>
        <p>{hData.description}</p>
        <hr/>

        <img className='smaller-images' src='../Icons/Pets/bell.png' alt='paw'/>
        <h3>Your day together</h3>
        <p>{compatibilityMessage}</p>
        <hr/>

        <div className="dos-donts">
          <div className="do-column">
            <h3>Do</h3>
            {doList.length && doList.map(word => <p key={word.word}>{word.word}</p>)}
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
