import React from 'react';

export default class GifSearch extends React.Component {
  render() {
    return (
      <form>
        <input type="text" id="search" placeholder="Search..." />
        <button onClick={this.props.handleClick}>Search</button>
      </form>
    );
  }
}