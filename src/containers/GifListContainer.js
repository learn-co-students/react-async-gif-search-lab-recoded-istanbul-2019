import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {

    state = {
        gifs: []
    }
    componentDidMount() {
        this.onFetchHandler()
    }
    onFetchHandler = async (quary = "dolphin") => {
        let result = await fetch(`https://api.giphy.com/v1/gifs/search?q=${quary}E&api_key=dc6zaTOxFJmzC&rating=g`)
        result = await result.json()
        result = result.data
        result = result.map(el => el.images.original.url)
        this.setState({ ...this.state, gifs: result })
    }
    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.onFetchHandler} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer