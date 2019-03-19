import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar';
import Booklist from './components/Booklist/Booklist';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Booklist />
      </div>
    )
  }
}



