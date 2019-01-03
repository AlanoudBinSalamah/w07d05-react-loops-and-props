import React from 'react';
import Comments from './Comments';

const BlogPost = (props) => {
  const post = props.post
  // console.log(post)

  return(
    <div className="blogPost">
      <div className="blogHeader">
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
      </div>
      <p>{post.content}</p>
      <Comments {...props} />
    </div>
  )
}

export default BlogPost;