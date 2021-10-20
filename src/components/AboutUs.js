import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>Meet the Team</h2>
        <div className="team-member">
         
          <img src='../Icons/ZodiacRep2/cancer.png' alt="Chibi Cancer Horoscope Sign."/>
          <p>My name is Sarani. I'm a Software Engineer and my sign is Cancer. My dog, Presley, is an Aries. Presley and I have already started to form a deep bond once we established that we were on the same side, making us pretty compatible. 
          </p>
        </div>
        <hr></hr>
        <div className="team-member">
          <p>I'm Diyana, a full stack dev/full-on Pisces based in Portland, Oregon. My dog is a Capricorn Shiba Inu named Blitz. You know she likes you if she greets you with a push. 
          </p> <img src='../Icons/SignSymbols/pisces.png' alt="pisces"/>
        </div>
        <hr></hr>
        <div className="team-member">
          <img src='../Icons/SignSymbols/sagittarius.png' alt="sagittarius"/>
          <p>My name is Elijah. I'm a Software Engineer and this is my adorable pet is Tucker. A great Dane mixed with lab.
          He's extremely active and loves to meet new people. 
          </p>
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
