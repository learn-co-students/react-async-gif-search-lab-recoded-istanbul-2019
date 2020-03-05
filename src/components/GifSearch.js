import React, { Component } from "react";

export default class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
          <input value={this.props.search} type='text' onChange={this.props.handleChange} />
          <button type='submit'> Submit</button>

      </form>
    )
  }
}


//onChange={this.props.handleChange}