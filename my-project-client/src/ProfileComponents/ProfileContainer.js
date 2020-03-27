import React, { Component } from 'react';
import Actor from './Actor'
import NewActorForm from './NewActorForm'

class ProfileContainer extends Component {

  render() {
    let {id, username, actors} = this.props.director
// console.log(this.props.director)
    return (
      <div className="font">
        <h2>Welcome Director, {username}!</h2>
        <ol>
          {
            actors.map((actor) => {
              return <Actor key={actor.id} actor={actor}
              deleteActor={this.props.deleteActor}
              />
            })
          }
        </ol>

        
          <NewActorForm token={this.props.token} 
          addActor={this.props.addActor} />
      </div>
    );
  }

}

export default ProfileContainer;