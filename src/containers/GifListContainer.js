import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async (query) => {
        const data = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        const result = await data.json();
        this.setState({
          images: result.data
        });
      };
 
    render() {
        return (
            <div> 
                <GifSearch fetchData={this.fetchData}/>
                <GifList images={this.state.images} />
                
            </div>
            
            
        )
    }
}

export default GifListContainer;