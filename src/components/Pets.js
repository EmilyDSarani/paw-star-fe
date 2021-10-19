import React, { Component } from 'react';
import { createPet, deletePet, getPets, getSign } from '../api-utils';

export default class AddPet extends Component {
  state = {
    name: '',
    birthday: '',
    type: '',
    sign: '',
    pets: [],
    hideUpdateForm: true,
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
    // console.log(newPet);
    await createPet(newPet, this.props.token);

    this.props.history.push('/pawstrology');
  }

  handleSelect = async e => {
    await this.setState({ type: e.target.value });
    // console.log(this.state.type);
  }

  handleDelete = async (id) => {
    await deletePet(id, this.props.token);
    const pets = await getPets(this.props.token);
    await this.setState({ pets });
  }

  // handleUpdate = async () => {
  //   const sign = await getSign(this.state.birthdayUpdate);
  //   await this.setState({ sign });
  //   const update = {
  //     name: this.state.nameUpdate,
  //     sign: this.state.sign,
  //   };
  //   console.log(update);
  //   await updatePet(this.state.petToUpdate, update, this.props.token);
  //   const pets = await getPets(this.props.token);
  //   await this.setState({ pets });
  // }

  // handleUpdateClick = () => {
  //   this.setState({ hideUpdateForm: false });
  // }
  

  render() {
    const petsArray = this.state.pets;
    return (
      <div className="pets-container">
        <div className="pets-list">
          <h3> Your Pets </h3>
          {
            petsArray.length === 0 ? <p>No pets to display. Please add a pet.</p> : 
              petsArray.map(pet => 
                <div key={pet.id}> 
                  <p> {pet.name} </p>
                  <p>{pet.sign}</p>

                  <button onClick={() => this.handleDelete(pet.id)}>Delete</button>

                  {/* <button onClick={this.handleUpdateClick && this.setState({ petToUpdate: pet.id })}>Update</button> */}
      
                  {/* <form className="update-form" style={this.state.hideUpdateForm ? { display: 'none' } : {}} onSubmit={() => this.handleUpdate(pet.id)}>
                  <label>
            Name <input defaultValue={pet.name} onChange={(e) => this.setState({ nameUpdate:e.target.value })} type='text'/>
                  </label>
                  <label>
            Birthday <input onChange={(e) => this.setState({ birthdayUpdate:e.target.value })}type ='date'/>
                  </label>
                  <button>Submit Update</button>
                </form> */}
                </div>
              
              )
          }

        </div>
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
