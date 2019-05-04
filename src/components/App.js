import React from 'react';
import DogImage from './dogimage.js';
import img from '../images/logo.svg';
import { HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {dog: "yes"};
  }

  render() {
    return (
      <main>
        <h1>get dogs</h1>
        <h2>abigail boyer, aboyer1@hawk.iit.edu, ITMD 565</h2>
        <p>he is a good boy</p>
        <DogImage></DogImage>
        <p>click to see more puppies</p>
        <button onClick={getDogs}>get puppies</button>
      </main>
    );
  }
}

function getDogs() {
    console.log('The link was clicked.');
}

export default App;
