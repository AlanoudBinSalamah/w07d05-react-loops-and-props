import React, { Component } from 'react';
import '../styles/App.css';
import BlogContainer from './BlogContainer';

class App extends Component {  

  render() {
    return (
      <div className="App">
        <h1>Bob Blob's Bog Blog</h1>
        <BlogContainer />
      </div>
    );
  }
}

export default App;
