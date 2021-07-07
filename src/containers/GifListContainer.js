import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }
  constUrl = (query) => {
    return `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
  };
  fetchData = async (query) => {
    const url = this.constUrl(query);
    const data = await fetch(url);
    const fetchedGifs = await data.json();
    this.setState({
      gifs: fetchedGifs,
    });
  };
  render() {
    return (
      <div>
        <GifSearch fetchData={this.fetchData} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
export default GifListContainer;