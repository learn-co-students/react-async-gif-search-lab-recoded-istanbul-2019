import React, { Component } from 'react';

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";


class GifListContainer extends Component {

  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  render() {
    return (
      <div>
        <GifSearch getInfo={this.getInfo} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
  getInfo = async (query) => {
    let data = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    let fetchedData = await data.json();
    this.setState({
      gifs: fetchedData
    });
  }
}

export default GifListContainer;
