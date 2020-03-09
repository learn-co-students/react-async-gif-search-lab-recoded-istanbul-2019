import React, { Component } from "react";

export default class GifSearch extends Component {
  state = { inputValue: null };

  onChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            onChange={event => this.onChange(event)}
            type="text"
            name=""
            placeholder="Search"
            id=""
          />
          <button
            onClick={event => this.props.onClick(event, this.state.inputValue)}
            type="submit"
            class="btn btn-primary"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
