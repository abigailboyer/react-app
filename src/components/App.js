import React from 'react';
import DogImage from './dogimage.js';
import img from '../images/logo.svg';

class App extends React.Component {
  render(){
    return (
      <main>
        <h1>get dogs</h1>
        <h2>abigail boyer, aboyer1@hawk.iit.edu, ITMD 565</h2>
        <p>good boy</p>
        <p>click to see more puppies</p>
        <DogImage></DogImage>
      </main>
    );
  }
}

export default App;
