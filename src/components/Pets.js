import React, { Component } from 'react';
import { createPet, deletePet, getPets, getSign } from '../api-utils';

export default class AddPet extends Component {
  state = {
    name: '',
    birthday: '',
    type: '',
    sign: '',
    pets: [],
    nameUpdate: '',
    birthdayUpdate: '',
    typeUpdate: ''
  }

  componentDidMount= async () => {
    const pets = await getPets(this.props.token);
    await this.setState({ pets });
  }

  handleSubmit = async e =>{
    e.preventDefault();

    const sign = await getSign(this.state.birthday);
    await this.setState({ sign });

    const newPet = {
      name: this.state.name,
      sign: this.state.sign,
      type: this.state.type
    };
    await createPet(newPet, this.props.token);

    this.props.history.push('/pawstrology');
  }

  handleSelect = async e => {
    await this.setState({ type: e.target.value });
  }

  handleDelete = async (id) => {
    await deletePet(id, this.props.token);
    const pets = await getPets(this.props.token);
    await this.setState({ pets });
  }

  render() {
    const petsArray = this.state.pets;
    return (
      <div className="pets-container">
        <div className="pets-list">
          <h3> Your Pets </h3>
          {
            petsArray.length === 0 ? <p>No pets to display. Please add a pet.</p> : 
              petsArray.map(pet => 
                <div className="one-pet" key={pet.id}> 
                  <img src={`../Icons/Pets/${pet.type}.png`} id='img' alt={pet.type} />
                  <p> {pet.name} | {pet.sign}</p>
                  <button className="delete-button" onClick={() => this.handleDelete(pet.id)}>Delete</button>
                </div>
              )
          }

        </div>
        <img src="../Icons/Pets/pet-bowl.png" alt="pet bowl" />
        <div className="addpet-container">
          <h3>Add a Pet</h3>
          <form className="addpet-form" onSubmit={this.handleSubmit}>
            <label>
            Pet Name <input value={this.state.name} onChange={(e) => this.setState({ name:e.target.value })} type='text'/>
            </label>
            <label>
            Pet Birthday <input value={this.state.birthday} onChange={(e) => this.setState({ birthday:e.target.value })}type ='date'/>
            </label>
            <select 
              required onChange={this.handleSelect}>
              <option value="">Pet Type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
            <button>Add Pet</button>
          </form>     
        </div>
      </div>
    );
  }
}
