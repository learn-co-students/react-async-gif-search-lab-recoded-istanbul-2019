import React, { Component } from "react";

export default class GifSearch extends Component{

  render(){
    return(
      <div>
          <h2>What are you looking for?</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              console.log("e target "+e.target[0].value)
              this.props.getInfo(e.target[0].value);
            }}>
            <input type="text" placeholder="search keywords for the gif..."></input>
            <button type="submit">Search</button>
            </form>
      </div>
    );
  }
}
