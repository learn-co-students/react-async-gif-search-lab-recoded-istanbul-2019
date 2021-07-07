import React, { Component } from 'react'

class GifSearch extends Component {


    render() {
        return (
            <ul> {this.props.images.map(image => {
                return <li key={image.id}><img src={image.images.original.url} alt={image.id}/></li>
            }).slice(0, 3)}
            </ul>
        )
    }
}

export default GifSearch;