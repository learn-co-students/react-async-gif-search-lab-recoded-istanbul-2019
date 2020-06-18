import React, { Component } from "react";

export default class GifList extends Component{


createList = () => {
  let elements = [];
  console.log(this.props.gifs.data)

  for(let i = 0; i<5; i++){
    if(this.props.gifs.data){
      elements.push(
        <li key={i}>
        <img src={this.props.gifs.data[i].images.original.url} />
        </li>
      )
    }
  }
  return elements;
}
  render(){
    return(
      <div>
      <ul>
        {this.props.gifs.data&&this.createList()}
      </ul>
      </div>
    );
  }
}