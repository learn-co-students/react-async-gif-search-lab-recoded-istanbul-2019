import React, { Component } from 'react'

import GifList from '../components/GifList'

class GifListContainer extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(data => {
            this.setState({
                images: data.data
            })
        })  
    }
    
    

    render() {
        return (
            // <div> {this.state.images.map(curr => {
            //     return <img key={curr.id} src={curr.images.original.url} alt={curr.id}/>
            // })}</div>
            <GifList images={this.state.images} />
        )
    }
}

export default GifListContainer;