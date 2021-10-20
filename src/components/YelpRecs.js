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
        <div className="park">
          <p>An outing is in order.</p>
          <a href={park.url}> 
            <img src="../Icons/Pets/map.png" alt="map icon"/>
            <h3>{park.name}</h3>
            <p>About {park.distance} mi away</p>
          </a> 
        </div>
       
        {/* { 
          this.state.photography && 
            <div className="photography">
              <p>An outing is in order.</p>
              <a href={photography.url}> 
                <img src="../Icons/Pets/map.png" alt="map icon"/>
                <h3>{photography.name}</h3>
                <p>About {photography.distance} mi away</p>
              </a> 
            </div>
        } */}
        
        <div className="groomers">
          <p>A spaw day is in order</p>
          <a href={groomer.url}> 
            <img src="../Icons/Pets/nail-file.png" alt="map icon"/>
            <h3>{groomer.name}</h3>
            <p>About {groomer.distance} mi away</p>
          </a> 
        </div>
        <div className="adoption">

        </div>
      </div>
    );
  }
}
