import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map( image => {
                    return <li>
                        <img 
                        src={image.images.original.url} alt=""
                        />
                        </li>
                } 
                )
                }
            </ul>
        )
    }
}