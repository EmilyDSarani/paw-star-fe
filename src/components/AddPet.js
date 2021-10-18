import React, { Component } from 'react';
import { createPet } from '../api-utils';
// will need a handle submit
//will need a form 
// will need a dropdown for dog and cat
export default class AddPet extends Component {
  state = {
    name: '',
    birthday: '',
    type: '',
    sign: '',
  }
  handleSubmit = async e =>{
    e.preventDefault();
    const newPet = {
      name: this.state.name,
      sign: this.state.sign,
      type: this.state.type
    };
    // console.log(newPet);
    await createPet(newPet, this.props.token);
    this.props.history.push ('/gallery');
  }

  handleSelect = async e => {
    await this.setState({ type: e.target.value });
    // console.log(this.state.type);
  }

  render() {
    return (
      <div>
        <form className="addpet-form" onSubmit={this.handleSubmit}>
          <label>
            Name: <input value={this.state.name} onChange={(e) => this.setState({ name:e.target.value })} type='text'/>
          </label>
          <label>
            Birthday: <input value={this.state.birthday} onChange={(e) => this.setState({ birthday:e.target.value })}type ='date'/>
          </label>
          <select onChange={this.handleSelect}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <button>Add my Fur-Baby!</button>
        </form>     
      </div>
    );
  }
}
