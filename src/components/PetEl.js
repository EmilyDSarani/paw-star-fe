import React, { Component } from 'react';
import { getHoroscope } from '../api-utils.js';
import { compMessage } from '../utils.js';

export default class PetEl extends Component {
  state = {
    horoscope: '',
  }

  componentDidMount = async () => {
    const horoscope = await getHoroscope(this.props.sign);
    await this.setState({ horoscope });
  }

  render() {
    const hData = this.state.horoscope;
    const userSign = localStorage.getItem('USERSIGN');
    const compatibilityMessage = compMessage(userSign, hData.compatibility);

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
            <p>Trees</p>
          </div>
          <div className="dont-column">
            <h3>Don't</h3>
            <p>Ketchup</p>
          </div>
        </div>
      </div>
    );
  }
}
