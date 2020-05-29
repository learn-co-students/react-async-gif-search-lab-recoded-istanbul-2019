import React, { Component } from 'react'

class GifList extends Component {
    

    render() {
        return (
            <div> {this.props.images.map(image => {
                return <li key={image.id}><img src={image.images.original.url} alt={image.id}/></li>
            }).slice(0, 3)}</div>
        )
    }
}

export default GifList;