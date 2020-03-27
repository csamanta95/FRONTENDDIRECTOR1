import React, {Component} from 'react'
import Comment from './Comment'

class Actor extends Component {

    handleDelete = (id) => {
    this.props.deleteActor(this.props.actor.id);
    }

render(){
    let {name, image, experience, age} = this.props.actor
    console.log(this.props)
    let arrayOfComments = this.props.actor.comments.map((comment, index) => {
        return <Comment key={index} comment={comment}/>
    })
  return(
        <div className="card">
          <img src={image} alt={name}
            className="card__image"
            // onClick={ this.handleClick }
          />
            <p>{name}</p>
            <p>Experience: {experience}</p>
              <p>Age: {age}</p>
              <button onClick={this.handleDelete} className="del-btn">Delete</button> 
              <p>{arrayOfComments} </p>
                  
        </div>
       
        

      
    )
  }
}


export default Actor;