import React, { Component } from 'react';
import '../styles/App.css';
import blogPosts from '../data/blogPosts';

// const array = [6,7,3,9,5]

class App extends Component {
  // addOne(num){
  //   return num + 1
  // }

  // showNumbers(){
  //   const numberElements = array.map((number)=>{
  //     return (
  //       <p>{this.addOne(number)}</p>
  //     )
  //   })
  //   console.log(numberElements);
  //   return numberElements
  // }

  renderBlogPosts(){
    const postElements = blogPosts.map((post, index)=>{
      return(
        <div className="blogPost" key={index}>
          <div className="blogHeader">
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
          </div>
          <p>{post.content}</p>
        </div>
      )
    })
    return postElements;
  }

  render() {
    console.log((<h1>Bob Blob's Bog Blog</h1>))
    return (
      <div className="App">
        <h1>Bob Blob's Bog Blog</h1>
        <div className="blogContainer">
          {this.renderBlogPosts()}
        </div>
      </div>
    );
  }
}

export default App;
