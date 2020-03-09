import React, { Component } from 'react'

class GifList extends Component {


  render() {

     const list = this.props.gifResults.map(item=>{
    <li key={item.id}> <img src={item.images.original.url}/></li>
    })

    return (
      <ul>
        {list}
      </ul>
    )
  }
}

export default GifList
