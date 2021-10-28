import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>Meet the Team</h2>
        <Bio sign="cancer" text={`My name is Sarani.I'm a Software Developer and my sign is Cancer. Presley is a schnauzer, and also an Aries. He is a quiet, alert little guy who bumps into every corner.`}/>
        <hr/>
        <Bio sign="pices" text={`I'm Diyana, a full stack dev/full-on Pisces based in Portland, Oregon. My dog is a Capricorn Shiba Inu named Blitz. You know she likes you if she greets you with a push. `}/>
        <hr/>
        <Bio sign="saggitarius" text={`My name is Elijah. I'm a Software Engineer. I have had multiple cats throughout my life and now I currently have two dogs. `}/>
        <hr/>
        <Bio sign="cancer" text={`My name is Katie - and aside from being a full stack developer, I'm also a Cancer. My cat Gigi is a Taurus, and we're both home-bodies who want nothing more than to cozy up for a snuggle.`}/>
        <hr/>
      </div>
    );
  }
}

// might be nice to have a functional component here for DRYness
function Bio({ sign, text }) {
  return <div className="team-member">
    <img src={`../Icons/ZodiacRep2/${sign}.png`} alt={`Chibi ${sign} Horoscope Sign.`} />
    <p>{text}</p>
  </div>;
}

