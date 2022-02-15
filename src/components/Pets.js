import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { createPet, deletePet, getPets } from '../api-utils';
import { getZodiac } from '../utils.js';

export default class AddPet extends Component {
  state = {
    name: '',
    b_month: '',
    b_day: '',
    type: '',
    sign: '',
    pets: [],
  };

  componentDidMount = async () => {
    const pets = await getPets(this.props.token);
    await this.setState({ pets });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    // const sign = await getSign(this.state.birthday);
    // await this.setState({ sign });

    const month = Number(this.state.b_month);
    const day = Number(this.state.b_month);

    const sign = getZodiac(month, day);

    await this.setState({ sign });

    const newPet = {
      name: this.state.name,
      sign: this.state.sign,
      type: this.state.type,
    };
    await createPet(newPet, this.props.token);

    this.props.history.push('/pawstrology');
  };

  handleSelect = async (e) => {
    await this.setState({ type: e.target.value });
  };

  handleDelete = async (id) => {
    await deletePet(id, this.props.token);
    const pets = await getPets(this.props.token);
    await this.setState({ pets });
  };

  render() {
    const petsArray = this.state.pets;
    return (
      <div className="pets-container">
        <div className="pets-list">
          <h3> Your Pets </h3>
          {petsArray.length === 0 ? (
            <p>No pets to display. Please add a pet.</p>
          ) : (
            petsArray.map((pet) => (
              <div className="one-pet" key={pet.id}>
                <img
                  src={`../Icons/Pets/${pet.type}.png`}
                  id="img"
                  alt={pet.type}
                />
                <p>
                  {' '}
                  {pet.name} | {pet.sign}
                </p>
                <HashLink to={`/pawstrology#${pet.id}`}>
                  <button className="to-chart">Pawstrology</button>
                </HashLink>
                <button
                  className="delete-button"
                  onClick={() => this.handleDelete(pet.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <img src="../Icons/Pets/pet-bowl.png" alt="pet bowl" />

        <h3>Add a Pet</h3>

        <div className="addpet-container">
          <form className="addpet-form" onSubmit={this.handleSubmit}>
            <label>
              <h6>Name</h6>
              <br />
              <input
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                type="text"
              />
            </label>

            <label>
              <h6>Birthday</h6>
              <br />
              <p>(month)</p>
              <input
                value={this.state.b_month}
                onChange={(e) => this.setState({ b_month: e.target.value })}
                type="number"
              />
            </label>

            <label>
              <p>(day)</p>
              <input
                value={this.state.b_day}
                onChange={(e) => this.setState({ b_day: e.target.value })}
                type="number"
              />
            </label>

            <select required onChange={this.handleSelect}>
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
