import React, {Component} from 'react';

class Comments extends Component{
  renderComments(comments) {
    const commentElements = comments.map((comment, index) => {
      return (
        <li key={index}>{comment}</li>
      )
    })
    return commentElements;
  }

  render(){
    console.log(this.props);
    return(
      <div className="comments">
        <h3>{this.props.commentTitle}</h3>
        <ul>
          {this.renderComments(this.props.post.comments)}
        </ul>
      </div>
    )
  }
}

export default Comments