import React, { Component } from 'react';
import { getHoroscope } from '../api-utils.js';

export default class PetEl extends Component {
  state = {
    horoscope: ''
  }

  componentDidMount = async () => {
    const horoscope = await getHoroscope(this.props.sign);
    await this.setState({ horoscope });
  }

  render() {
    const hData = this.state.horoscope;
    console.log(hData, this.props.type);
    return (
      <div className="pet-el">
        {this.props.type === 'dog' ? <img src='../Icons/Pets/dog.png' alt='dog'/> : <img src='../Icons/Pets/cat.png' alt='cat'/>
        }
        <h2>{this.props.name}</h2>
        {/* <div className="zodiac"> */}
        <img className='paws' src='../Icons/ZodiacRep2/capricorn.png' alt='capricorn'/>
        <h3>{this.props.name} is a {this.props.sign}</h3>
        {/* </div> */}
        <p>Mood: {hData.mood}</p>
        <p>Color: {hData.color}</p>
        <p>{this.props.name}'s BFF today is a {hData.compatibility}.</p>
        <img className='paws' src='../Icons/Pets/paws.png' alt='paw'/>
        <h3>What {this.props.name} is paw-ndering today:</h3>
        <p>{hData.description}</p>

      </div>
    );
  }
}
