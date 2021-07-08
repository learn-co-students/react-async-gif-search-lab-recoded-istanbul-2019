import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {
 constructor() {
  super()
  this.state = {
    dataInput:"",
    dataimage: []
  }
}
handlerChange =(event)=>{
this.setState({
    dataInput:event.target.value
})}
handlerSubmit =()=>{
  fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.dataInput}&api_key=gVCTvvT9tmAVr9TE9KvLsDu1YBcxgZS7`)
      .then(response => response.json())
      .then(result => {
        this.setState({
          dataimage: result.data.slice(0,3)
        })
      })
}
 render(){
  return (
    <div>
     <GifSearch handlerChange={this.handlerChange} handlerSubmit={this.handlerSubmit} />
     <GifList list={this.state.dataimage}/>
    </div>
  )}
  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gVCTvvT9tmAVr9TE9KvLsDu1YBcxgZS7')
      .then(response => response.json())
      .then(result => {
        this.setState({
          dataimage: result.data.slice(0,3)
        })
      })
  }
    
 
}
export default GifListContainer