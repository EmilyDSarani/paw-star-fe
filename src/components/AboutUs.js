import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>Meet the Team</h2>
        <div className="team-member">
         
          <img src='../Icons/ZodiacRep2/cancer.png' alt="Elijah Prosperie and his dog Tucker."/>
          <p>My name is Sarani. I'm a Software Engineer and this is my adorable pet is Tucker. A great Dane mixed with lab.
          He's extremely active and loves to meet new people. 
          </p>
        </div>
        <div className="team-member">
          <p>My name is Diyana. I'm a Software Engineer and this is my adorable pet is Tucker. A great Dane mixed with lab.
          He's extremely active and loves to meet new people. 
          </p> <img src='../Icons/SignSymbols/pisces.png' alt="Elijah Prosperie and his dog Tucker."/>
        </div>
       
        <div className="team-member">
          <img src='../Icons/SignSymbols/sagittarius.png' alt="Elijah Prosperie and his dog Tucker."/>
          <p>My name is Elijah. I'm a Software Engineer and this is my adorable pet is Tucker. A great Dane mixed with lab.
          He's extremely active and loves to meet new people. 
          </p>
        </div>
        <div className="team-member">
          <p>My name is Katie. I'm a Software Engineer and this is my adorable pet is Tucker. A great Dane mixed with lab.
          He's extremely active and loves to meet new people. 
          </p> 
          <img src='../Icons/misc/magic-wand.png' alt="Elijah Prosperie and his dog Tucker."/>
        </div>
      </div>
    );
  }
}
