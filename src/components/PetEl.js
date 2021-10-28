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
      // nice slicin'!
      const wordArrayOne = origArray.slice(0, Math.floor(origArray.length / 2));
      const wordArrayTwo = origArray.slice(Math.floor((origArray.length / 2) + 1));

      // this will set it up so all the promises fire at the same time instead of having to go one by one. since the promises don't depend on each other, it should still work
      const [threeWordsDo, threeWordsDont] = await Promise.all([
        getThreeWords(wordArrayOne), 
        getThreeWords(wordArrayTwo)
      ]);

      await this.setState({ threeWordsDont, threeWordsDo });
    }
  }

  render() {
    const { compatibility, description, mood, color } = this.state.horoscope;
    const { name, sign, type, id } = this.props;
    const userSign = localStorage.getItem('USERSIGN');
    const compatibilityMessage = compMessage(userSign, hData.compatibility);
    const doList = this.state.threeWordsDo;
    const dontList = this.state.threeWordsDont;
    return (
      <div className="pet-el" id={id}>
        
        <img src={`../Icons/Pets/${type}.png`} id='img' alt={type} />
        <h2>{name} is {correctArticle(sign)} {sign}</h2>
        <hr/>

        <img className='smaller-images' src={`../Icons/ZodiacRep2/${sign}.png`} id='img' alt={sign}/>
        <h3>Today</h3>
        <p>Mood: {mood}</p>
        <p>Color: {color}</p>
        <p>{name}'s BFF is {correctArticle(String(compatibility))} {compatibility}.</p>
        <hr/>

        <img className='smaller-images' src='../Icons/Pets/paws.png' alt='paw'/>
        <h3>What {name} is paw-ndering today:</h3>
        <p>{description}</p>
        <hr/>

        <img className='smaller-images' src='../Icons/Pets/bell.png' alt='paw'/>
        <h3>Your day together</h3>
        <p>{compatibilityMessage}</p>
        <hr/>

        <div className="dos-donts">
          <div className="do-column">
            <h3>Do</h3>
            {doList.length && doList.map(({ word }) => <p key={word}>{word}</p>)}
          </div>
          <div className="dont-column">
            <h3>Don't</h3>
            {dontList.map(({ word }) => <p key={word}>{word}</p>)}
          </div>
        </div>

      </div>
    );
  }
}
