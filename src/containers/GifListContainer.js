import React, { Component } from 'react'
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
    constructor(){
        super()

        this.state = {
            gifResults: [],
            search: "dolphin",
        }
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=JWUQcbYLgvGDCIT2gUCyeUwUe1zGzMhG&rating=g`)
        .then(res => res.json())
        .then(gif => {
            this.setState({
                gifResults: gif.data.slice(0, 3)
            })
        })
    }

    handleSubmit = (input) => {
        this.setState({
            search: input,
        })
    }

    render(){
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifResults={this.state.gifResults} />
            </div>
        )
    }
}

export default GifListContainer