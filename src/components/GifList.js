import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
          <ul>
              {this.props.list.map(img=>{
                  return <li><img src={img.images.original.url} alt=""/></li>
              })}
          </ul>
        )
    }
}