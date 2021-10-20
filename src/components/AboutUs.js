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
          <p>My name is Diyana. I'm a Software Engineer and this is my adorable pet is Tucker. A great Dane mixed with lab.
          He's extremely active and loves to meet new people. 
          </p> <img src='../Icons/SignSymbols/pisces.png' alt="Elijah Prosperie and his dog Tucker."/>
        </div>
        <hr></hr>
        <div className="team-member">
          <img src='../Icons/SignSymbols/sagittarius.png' alt="Elijah Prosperie and his dog Tucker."/>
          <p>My name is Elijah. I'm a Software Engineer and this is my adorable pet is Tucker. A great Dane mixed with lab.
          He's extremely active and loves to meet new people. 
          </p>
        </div>
        <hr></hr>
        <div className="team-member">
          <p>My name is Katie, and I'm a Full-Stack Software Developer. I'm a Cancer, and my cat Gigi is a Taurus. We're both home-bodies who want nothing more than a cozy snuggle at all times.
          </p> 
          <img src='../Icons/misc/ritual.png' alt="katie's other form"/>
        </div>
      </div>
    );
  }
}
