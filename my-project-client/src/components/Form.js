import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }






  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
    <div className="body-form-1">
        <div className="form-style-6">
        <form onSubmit={this.handleSubmit}>
      <fieldset><legend>{formName}</legend>
        <label for="field10"><span>Username<span class="required">*</span></span><input type="text" class="input-field" name="username" value={username} onChange={this.handleChange} /></label>
        <label for="field11"><span>Password<span class="required">*</span></span><input type="password" class="input-field" name="password" value={password} onChange={this.handleChange} /></label>
        <label><span> </span><input type="submit" value="Submit" /></label>
          </fieldset>
      </form>
       
      </div>
    </div>
    );
  }

}

export default Form;