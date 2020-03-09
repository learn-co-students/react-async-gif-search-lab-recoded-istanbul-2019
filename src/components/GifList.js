import React, { Component } from "react";

export default class GifList extends Component {
  mapGifs = () => {
    return this.props.data.map(gif => {
      for (const key in gif.images) {
        return (
          <li>
            <img src={gif.images["original"].url} alt="" srcset="" />
          </li>
        );
      }
    });
  };

  render() {
    return <ul>{this.mapGifs()}</ul>;
  }
}
