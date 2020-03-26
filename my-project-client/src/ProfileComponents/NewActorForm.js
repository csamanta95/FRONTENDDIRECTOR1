import React, { Component } from 'react';

class NewActorForm extends Component {

  state = {
    image: "",
    name: "",
    age: "",
    experience: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.token);

    fetch("http://localhost:3000/actors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${this.props.token}`
      },
      body: JSON.stringify({
        image: this.state.image,
        name: this.state.name,
        age: this.state.age,
        experience: this.state.experience
      })
    })
    .then(r => r.json())
    .then((resp) => {
      console.log(resp);
      if (resp.id) {
        this.props.addActor(resp)
      } else {
        alert("Error");
      }
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add another actor/actress</h3>
        <input 
            type="text" 
            name="image" 
            placeholder="Enter image URL..." 
            className="input-text"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <br/>
        <input 
            type="text" 
            name="name" 
            placeholder="Enter actor/actress name..." 
            className="input-text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br/>
          <input 
            type="text" 
            name="age" 
            placeholder="age..." 
            className="input-text"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br/>
          <input 
            type="text" 
            name="experience" 
            placeholder="experience..." 
            className="input-text"
            value={this.state.experience}
            onChange={this.handleChange}
          />
          <br/>
          <input 
            type="submit" 
            name="submit" 
            value="Add" 
            className="submit"
          />
      </form>
    );
  }

}

export default NewActorForm;