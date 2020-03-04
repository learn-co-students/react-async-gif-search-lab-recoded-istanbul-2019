import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        const list =this.props.gifList.map(gif =><li key={gif.name}> <img src={gif.images.original.url}/> <br/> </li> )
                
        return (
            <ul>
               {list}
            </ul>
        )
    }
}
