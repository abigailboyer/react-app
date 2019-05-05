import React from 'react';
import DogImage from './dogimage.js';
import DogSelect from './dogSelect.js';
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

    this.selectOnChange = this.selectOnChange.bind(this);
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

  selectOnChange(){
    let breed = document.getElementById("selection").value;
    this.setState({
      breed: breed,
      url: 'https://dog.ceo/api/breed/'+ breed + 'images/random'
    });

    console.log(breed + "good dog");
    axios.get('https://dog.ceo/api/breed/'+ breed + 'images/random')
    .then(response => {
      console.log("here" + response.data.message);
      this.setState({ image: response.data.message });
      console.log("hey" + this.state);
    })
    .catch(error => {
      console.log(error);
    })

  }


  getDogs(){
    console.log("doggies");
    let breed = document.getElementById("selection").value;
    axios.get('https://dog.ceo/api/breed/'+ breed + 'images/random')
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

    if(this.state.breed === "husky/"){
      breed = "husky";
    } else if(this.state.breed === "chihuahua/"){
      breed = "chihuahua";
    } else if(this.state.breed === "pyrenees/"){
      breed = "pyrenees";
    }
    console.log("breed of : " + this.state.breed);

    return (
      <main>
        <h1>{breed} pictures</h1>
        <h2>abigail boyer, aboyer1@hawk.iit.edu, ITMD 565</h2>
        <p>click to see more puppies</p>
        <DogSelect selectOnChange={this.selectOnChange} />
        <button onClick={this.getDogs}>get puppies</button>
        <hr />
        <DogImage image={this.state.image} breed={breed} />
        <p>what a good boy</p>
      </main>
    );
  }
}

export default App;
