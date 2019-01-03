import React, {Component} from 'react';
import blogPosts from '../data/blogPosts';
import BlogPost from './BlogPost';

class BlogContainer extends Component {
  renderBlogPosts() {
    const postElements = blogPosts.map((post, index) => {
      return (
        <BlogPost post={post} commentTitle="These Are The Comments" key={index} />
      )
    })
    return postElements;
  }

  // When rendering each blog post, also render a list of it's comments
  // HINT: Create a function that will map through an array of comments
  // and return the appropriate JSX for each

  render(){
    return(
      <div className="blogContainer">
        {this.renderBlogPosts()}
      </div>
    )
  }
}

export default BlogContainer;