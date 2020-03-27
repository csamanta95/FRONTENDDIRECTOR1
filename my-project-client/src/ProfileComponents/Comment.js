import React, {Component} from 'react'


class Comment extends Component {

   

render(){
    // let {comment} = this.props
    console.log(this.props)
    // let arrayOfComments = this.props.actor.comments.map((comment, index) => {
    //     return <Comment key={comment.id} comment={comment}/>
    // })
  return(
      <div>
         <li>{this.props.comments} </li>     
                  
       </div>
       
        

      
    )
  }
}
  export default Comment;