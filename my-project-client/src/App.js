import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'

import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {withRouter} from 'react-router-dom'


class App extends React.Component {
state={
  director: {
    id: 0,
    username: "",
    actors: []
  },

  token: ""
}

componentDidMount() {
  
  if (localStorage.token) {
    fetch("http://localhost:3000/persist", {
      headers: {
        "Authorization": `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then(this.handleResp)
  }
}

handleResp = (resp) => {
  if (resp.director) {
    localStorage.token = resp.token
    this.setState({
      director: resp.director,
      token: resp.token
    }, () => {
      this.props.history.push("/profile")
    })
  } else {
    alert(resp.error)
  }
}

handleLoginSubmit = (userInfo) => {
console.log(userInfo)
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
  .then(r => r.json())
  .then(this.handleResp)
}
  // .then(this.handleResp)
  // .then(response => {
  //   console.log(response)
  //   if (response.director) {
  //   this.setState({
  //     director: response.director,
  //     token: response.token 
  //   }, () => {
  //     this.props.history.push("/profile")
  //   })
  // } else {
  //     alert(response.error)
  //   }
  // })

handleRegisterSubmit = (userInfo) => {
  // console.log(userInfo)
  fetch("http://localhost:3000/directors", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username: userInfo.username,
      password: userInfo.password
    })
  })
  .then(r => r.json())
  // .then(user => {
  //   this.setState({
  //     director: user
  //   }, () => {
  //     this.props.history.push("/profile")
  //   })
  // })
  .then(this.handleResp)
}





renderForm = (routerProps) => {
  if(routerProps.location.pathname === "/login"){
    return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
  } else if (routerProps.location.pathname === "/register") {
    return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
  }
}

addActor = (actorObj) => {

  this.setState({
    director: {
      ...this.state.director,
      actors: [...this.state.director.actors, actorObj]
    }
  })
}

deleteActor = (id) => {
  // console.log(id)
  fetch(`http://localhost:3000/actors/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
  let filteredArray = this.state.director.actors.filter(actorObj => {
    return actorObj.id !== id
  })
  this.setState({
    director: {
      ...this.state.director,
      actors: filteredArray
    }
  })
})
}

handleRating = (id, number) => {
  let foundObject = this.state.director.actors.find(rate => rate.id === id)
  fetch(`http://localhost:3000/actors/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      ...foundObject,
      rating: foundObject.rating + number
    })
  })
  .then(r => r.json())
  .then(() => {
  // console.log(number)
  let updatedArray = this.state.director.actors.map(rate => {
    if (rate.id === id) {
      return {
        ...rate,
        rating: rate.rating + number
      }
    } else {
      return rate
    }
  })
  this.setState({
    director: {
      ...this.state.director,
      actors: updatedArray
    }
  })
})
}
  






renderProfile = (routerProps) => {
  return <ProfileContainer
    director={this.state.director}
    token={this.state.token}
    addActor={this.addActor}
    deleteActor={this.deleteActor}
    handleRating={this.handleRating}
  />
}





  render(){
    console.log(this.state)
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact render={() => <Home /> } />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App)

