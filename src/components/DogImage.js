import React from 'react';
import img from '../images/logo.svg';
import axios from 'axios';

class DogImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://dog.ceo/api/breed/husky/images/random",
      breed: "",
      image: ""
    };
  }

  componentDidMount(){
    axios.get('https://dog.ceo/api/breed/husky/images/random')
    .then(response => {
      console.log(response.data);
      this.setState({ image: response.data.message });
      console.log(this.state)
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const { error, isLoaded, image } = this.state;

    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default DogImage;
