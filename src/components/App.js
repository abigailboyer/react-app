import React from 'react';
import DogImage from './dogimage.js';
import img from '../images/logo.svg';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://dog.ceo/api/breed/husky/images/random",
      breed: "",
      image: ""
    };

    this.getDogs = this.getDogs.bind(this);
  }

  componentDidMount(){
    axios.get('https://dog.ceo/api/breed/husky/images/random')
    .then(response => {
      console.log(response.data);
      this.setState({ image: response.data.message });
      console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    })
  }


  getDogs(){
    console.log("doggies");
    axios.get('https://dog.ceo/api/breed/husky/images/random')
    .then(response => {
      console.log(response.data.message);
      this.setState({ image: response.data.message });
      console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    })
    console.log("doggies 2");
  }

  render() {

    let breed = "husky";

    return (
      <main>
        <h1>get dogs</h1>
        <h2>abigail boyer, aboyer1@hawk.iit.edu, ITMD 565</h2>
        <p>click to see more puppies</p>
        <button onClick={this.getDogs}>get puppies</button>
        <hr />
        <DogImage image={this.state.image} breed={breed} />
        <p>he is a good boy</p>
      </main>
    );
  }
}

export default App;
