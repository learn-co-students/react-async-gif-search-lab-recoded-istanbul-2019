import React, { Component } from 'react'

class GifSearch extends Component {

  handleSearch = (event)=>{
    this.props.searchHandler(event.target.value)
  }


  render() {
    return (
      <form>
        <input type='text' onChange={this.handleSearch}></input>
        
      </form>
    )
  }
}

export default GifSearch
