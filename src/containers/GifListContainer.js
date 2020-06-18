import React, { Component } from "react"
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"

class GifListContainer extends Component {
    constructor() {
        super()
        this.state= {
            gifs : []
        }
    }

    render() {
        return (
            <div>
             {this.state.gifs.map(gif => gif.name)}
            </div>
        )
    }

    componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=${this.state.gifs}&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.gif
        })
      })
  }

  //handleSubmit

}

export default GifListContainer