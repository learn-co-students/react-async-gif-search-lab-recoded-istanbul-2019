import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    search: ""
  }

  handleChange=(event)=>{
    this.setState({
        searchWord:event.target.value
    })
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={event => this.setState({search: event.target.value})} />
        </form>
      </div>
    )
  }

}

export default GifSearch
