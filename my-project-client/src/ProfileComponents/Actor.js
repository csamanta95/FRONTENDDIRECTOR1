import React, {Component} from 'react'
import Comment from './Comment'

class Actor extends Component {

    handleDelete = (id) => {
    this.props.deleteActor(this.props.actor.id);
    }

    handleRating = () => {
        this.props.handleRating(this.props.actor.id, 1);
    }


render(){
    let {name, image, experience, age, contact, rating} = this.props.actor
    console.log(this.props)
    // let arrayOfComments = this.props.actor.comments.map((comment, index) => {
    //     return <Comment key={index} comment={comment}/>
    // <p>{arrayOfComments} </p>
    // })
  return(
        <div className="card">
          <img src={image} alt={name}
            className="card__image"
            // onClick={ this.handleClick }
          />
            <p>{name}</p>
            <p>Age: {age}</p>
            <div className="wrapper">
            <button onClick={this.handleRating}><span>Rating: {rating}</span></button>
            </div>
            <p>Experience: {experience}</p>
            <p>Contact: {contact}</p>
              <button onClick={this.handleDelete} className="btn-slice">Delete</button> 
              
                  
        </div>
       
        

      
    )
  }
}


export default Actor;