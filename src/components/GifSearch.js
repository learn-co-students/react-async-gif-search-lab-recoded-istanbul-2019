import React, { Component } from "react";
 class GifSearch extends Component {
  render() {
    return (
      <div>
        <h3>Enter a Search Term</h3>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.fetchData(event.target[0].value);
          }} ><input type="text"></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
export default GifSearch;