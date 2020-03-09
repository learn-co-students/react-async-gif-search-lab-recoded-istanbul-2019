import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const url = "https://api.giphy.com/v1/gifs/search?q=";
const apiKey = `&api_key=dc6zaTOxFJmzC&rating=g`;

const api_url =
  "https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g";

export default class GifListContainer extends Component {
  state = { gifs: [{}] };

  componentDidMount() {
    fetch(api_url)
      .then(respon => respon.json())
      .then(data => {
        this.setState({ gifs: data.data.slice(0, 3) });
        console.log(this.state);
      });
  }

  search = query => {
    const apiReq = url + query + apiKey;
    fetch(apiReq)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          gifs: json.data.slice(0, 3)
        });
      });
  };

  onClick = (event, searchInput) => {
    event.preventDefault();

    this.search(searchInput);
  };

  render() {
    return (
      <div>
        <GifSearch onClick={this.onClick}></GifSearch>
        <GifList data={this.state.gifs}></GifList>
      </div>
    );
  }
}
