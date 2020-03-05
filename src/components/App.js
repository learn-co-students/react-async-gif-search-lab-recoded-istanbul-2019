import React from 'react';
import GifListContainer from './GifListContainer'


import NavBar from './NavBar'

function getUrl(query) {
  return `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
  }

  handleClick = (event) => {
    fetch(getUrl(document.querySelector('#search').value))
    .then(res => res.json())
    .then(json => {
      this.setState({
        images: json.data.slice(0, 3),
      })
    });
  }

  render() {
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        <input type="text" id="search" placeholder="Search..." />
        <button onClick={this.handleClick}>Search</button>

        <GifListContainer images={this.state.images} />
      </div>
    );
  }
}