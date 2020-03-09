import React, { Component } from 'react'

class GifList extends Component {


  render() {

     const gifList = this.props.gifResults.map(item=>{
    <li key={item.id}> <img src={item.images.original.url}/></li>
    })

    return (
      <ul>
        {gifList}
      </ul>
    )
  }
}

export default GifList
