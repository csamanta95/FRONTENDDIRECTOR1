import React from 'react';
import Comment from './Comment'

const Actor = ({actor}) => {
  return(

    <li className="cards__item">
        <div className="card">
          <img src={actor.image} alt={actor.name}
            className="card__image"
            // onClick={ this.handleClick }
          />
          <div className="card__content">
            <div className="card__title">{actor.name}</div>
           
            <div className="card__detail">
              <p>Experience: {actor.experience}</p>
              <p>Age: {actor.age}</p>

              <ul className="comment">
                  {
        actor.comments.map((comment, index) => {
          return <Comment key={index} comment={comment}/>
        })
    }
      </ul>
              
                
        </div>
        </div>
        </div>

      </li>
    );
  }





export default Actor;