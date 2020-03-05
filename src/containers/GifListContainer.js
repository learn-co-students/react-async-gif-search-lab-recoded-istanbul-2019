import React, { Component } from "react";
import  GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
export default class GifListContainer extends Component {
  state = {
    data: [],
    search: ''
  };
  apiQuery = query => {
    const url = "https://api.giphy.com/v1/gifs/search?q=";
    const apiKey = `&api_key=dc6zaTOxFJmzC&rating=g`;
    const apiReq = url + query + apiKey;

    fetch(apiReq)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          data: json.data.slice(0,3),
          search : ''
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault()
      this.apiQuery(this.state.search)
  }
   handleChange = e => {
       this.setState({
           search : e.target.value
       });
   }
  render() {
      console.log(this.state)
    return( 
    <div>
    <GifSearch search ={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    <GifList data={this.state.data}/>

    </div>)
  }
}
