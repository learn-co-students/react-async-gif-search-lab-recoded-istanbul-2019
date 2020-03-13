import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {

    constructor() {
        super();
        this.state = {
            gifs: [],
            search: ""
        }
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
          })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(data => {
            this.setState({
               gifs: data.data.slice(0,3)  
            })
        })
    }

    render() {
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <GifList gifs={this.state.gifs} /> 
            </div>
        )
    }
}