import React, { Component } from 'react'

class GifList extends Component {

    render() {
        const renderGifs = this.props.gifResults.map( data => {
           return <li key={data.id}>
                <img src={data.images.original.url} alt={data.title} />
            </li>
        })

        return (
            <ul>
                {renderGifs}
            </ul>
        )
    }
}

export default GifList