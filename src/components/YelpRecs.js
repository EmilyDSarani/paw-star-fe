import React, { Component } from 'react';
import { getYelpData } from '../api-utils';
import { findBusiness } from '../utils';

export default class YelpRecs extends Component {
  state = {
    businesses: [],
    location: Number(localStorage.getItem('USERZIP')),
    park: {},
    photography: {},
    groomer: {},
  }
 

  componentDidMount = async () => {
    const businesses = await getYelpData(this.state.location);
    await this.setState({ businesses });

    const park = findBusiness(businesses, 'parks');
    await this.setState({ park });

    const groomer = findBusiness(businesses, 'groomer');
    await this.setState({ groomer });
    
  }
  
  render() {
    const {
      park: {
        name: pName, 
        distance: pDistance, 
        url: pURL,
       },
      groomer: { 
        name: gName, 
        distance: gDistance, 
        url: gURL,
       }
     } = this.state
    
    return (
      <div className="yelp-container">
        <div className="yelp-rec">
          <h3>Consider an adventure</h3>
          <img src="../Icons/Pets/map.png" alt="map icon"/>
          <h4>{pName}</h4>
          <p>About {pDistance} mi away</p>
          <a href={pURL}>View on Yelp</a> 
        </div>

        <hr/>
        
        <div className="yelp-rec">
          <h3>A spa-w day is in order</h3>
          <img src="../Icons/Pets/nail-file.png" alt="map icon"/>
          <h4>{gName}</h4>
          <p>About {gDistance} mi away</p>
          <a href={gURL}>View on Yelp</a> 
        </div>
      </div>
    );
  }
}
