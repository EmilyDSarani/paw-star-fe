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

    // const photography = businesses.find(business => business.category.find(category => category.alias === 'petphotography'));
    // await this.setState({ photography });

    const groomer = findBusiness(businesses, 'groomer');
    await this.setState({ groomer });

    // const adoption = findBusiness(businesses, 'petadoption');
    // await this.setState({ groomer });


    
  }
  
  render() {
    const park = this.state.park;
    // const photography = this.state.photography;
    const groomer = this.state.groomer;
    
    return (
      <div className="yelp-container">
        <div className="yelp-rec">
          <h3>Consider an adventure</h3>
          <img src="../Icons/Pets/map.png" alt="map icon"/>
          <h4>{park.name}</h4>
          <p>About {park.distance} mi away</p>
          <a href={park.url}>View on Yelp</a> 
        </div>
        <hr/>
        <div className="yelp-rec">
          <h3>A spa-w day is in order</h3>
          <img src="../Icons/Pets/nail-file.png" alt="map icon"/>
          <h4>{groomer.name}</h4>
          <p>About {groomer.distance} mi away</p>
          <a href={groomer.url}>View on Yelp</a> 
        </div>
      </div>
    );
  }
}
