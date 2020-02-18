import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AllPost from './components/post/AllPost';
import PostForm from './components/post/PostForm';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPost />
      </div>
    )
  }
}

export default App;
