import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>Meet the Team</h2>
        <div className="team-member">
         
          <img src='../Icons/ZodiacRep2/cancer.png' alt="Chibi Cancer Horoscope Sign."/>
          <p>My name is Sarani. I'm a Software Engineer and my sign is Cancer. Presley is a schnauzer, and also an Aries. He is a quiet, alert little guy who bumps into every corner. 
          </p>
        </div>
        <hr></hr>
        <div className="team-member">
          <p>I'm Diyana, a full stack dev/full-on Pisces based in Portland, Oregon. My dog is a Capricorn Shiba Inu named Blitz. You know she likes you if she greets you with a push. 
          </p> <img src='../Icons/SignSymbols/pisces.png' alt="pisces"/>
        </div>
        <hr></hr>
        <div className="team-member">
          <img src='../Icons/SignSymbols/sagittarius.png' alt="Elijah Prosperie and his dog Tucker."/>
          <p>My name is Elijah. I'm a Software Engineer. I have had multiple cat's throughout my life and now I currently have two dogs.</p>
        </div>
        <hr></hr>
        <div className="team-member">
          <p>My name is Katie - and aside from being a full stack developer, I'm also a Cancer. My cat Gigi is a Taurus, and we're both home-bodies who want nothing more than to cozy up for a snuggle.
          </p> 
          <img src='../Icons/misc/ritual.png' alt="katie's other form"/>
        </div>
      </div>
    );
  }
}
