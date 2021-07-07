import React, { Component } from 'react'

class GifSearch extends Component {

  handleSearch = (event)=>{
    this.props.searchHandler(event.target.value)
  }


  render() {
    return (
      <div>
        <input type='text' onChange={this.handleSearch}></input>
        
      </div>
    )
  }
}

export default GifSearch
