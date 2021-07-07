import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map(item => {
                    return <li key={item.id}><img src={item.images.original.url} alt={item.type} /></li>
                    } )
                }
            </ul>
        )
    }
}
