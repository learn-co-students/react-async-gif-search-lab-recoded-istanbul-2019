import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  URL = (query) => {
    return `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
  };

  fetchGifData = async (query) => {
    const url = this.URL(query);
    const data = await fetch(url);
    const fetchedData = await data.json();
    this.setState({
      gifs: fetchedData,
    });
  };

  render() {
    return (
      <div>
        <GifSearch fetchData={this.fetchGifData} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
