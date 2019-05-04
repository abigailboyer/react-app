import React from 'react';
import img from '../images/logo.svg';

class DogImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      image: []
    };
  }

  componentDidMount(){
    fetch("https://dog.ceo/api/breed/husky/images/random", {mode:'no-cors'})
      .then(res => res.json())
      .then((json) => {
        console.log(json);
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            image: result.image
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
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
