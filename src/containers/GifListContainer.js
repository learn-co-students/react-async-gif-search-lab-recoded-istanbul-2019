import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  constructor(props){
    super(props)
    this.state={
        gifs:[],
        search:""
    }
}

handleChange = (event) => {
  this.setState({
    search:event.target.value 
  })
}

handleSubmit = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      .then(data=> {this.setState({gifs:data.data})
       })
 }

 componentDidMount = ()=> {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
  .then(response=>response.json())
  .then(data => this.setState({gifs: data.data.slice(0,3)}))
}
  render() {
    return(
      <div>
        <GifList list={this.state.gifs}/>
        <GifSearch 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        search={this.state.search}/>
      </div>
    )
}
}
export default GifListContainer