import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map(iimg=>{
                    return <li><img src={iimg.images.original.url} alt=""/></li>
                })}
            </ul>
        )
    }
}
