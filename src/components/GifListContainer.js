import React from 'react';
import GifList from './GifList';

export default class GifListContainer extends React.Component {
  render() {
    return (
      <GifList images={this.props.images} />
    );
  }
}