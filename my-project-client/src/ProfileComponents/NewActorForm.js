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
    console.log(this.props.token)

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
      // console.log(resp);
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
    // console.log(this.props.token)
    return (

    <div className="second-form">
    <div class="form-style-3">
      <form onSubmit={this.handleSubmit}>
      <fieldset><legend>Add another actor/actress</legend>
        
        <label for="field1"><span>Image <span className="required">*</span></span><input type="url" class="input-field" name="image" value={this.state.image} onChange={this.handleChange} /></label>
        <label for="field2"><span>Name<span className="required">*</span></span><input type="text" class="input-field" name="name" value={this.state.name} onChange={this.handleChange} /></label>
        <label for="field3"><span>Age<span className="required">*</span></span><input type="text" class="input-field" name="age" value={this.state.age} onChange={this.handleChange} /></label>
        <label for="field4"><span>Experience <span className="required">*</span></span><input type="text" class="input-field" name="experience" value={this.state.experience} onChange={this.handleChange} /></label>
        <label><span> </span><input type="submit" value="Submit" /></label>
          </fieldset>
      </form>
    </div>
    </div>
    );
  }

}

export default NewActorForm;