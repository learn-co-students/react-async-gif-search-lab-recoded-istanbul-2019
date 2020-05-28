import React, { Component } from "react";
 class GifList extends Component {
  renderData = () => {
    const renderedGifs = [];
    for (let i = 0; i < 3 && i < this.props.gifs.data.length; i++) {
      renderedGifs.push(
        <li key={i}>
          <img
            width="150px"
            height="150px"
            src={this.props.gifs.data[i].images.original.url}
            alt="gif"
          ></img>
        </li>
      );
    }
    return renderedGifs;
  };
  render() {
    return (
      <div>
        <ul>{this.props.gifs.data ? this.renderData() : null}</ul>
      </div>
    );
  }
}
export default GifList;