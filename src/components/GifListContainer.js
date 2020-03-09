import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
          image: [],
          query: ''
        }
    }

    async componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gVCTvvT9tmAVr9TE9KvLsDu1YBcxgZS7')
          .then(response => response.json())
          .then(result => {
            this.setState({
              image: result.data.slice(0, 3)
              
            })
            console.log(result);
            
        })
    }  

    searchHandler = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=gVCTvvT9tmAVr9TE9KvLsDu1YBcxgZS7`)
          .then(response => response.json())
          .then(result => {
            this.setState({
              image: result.data.slice(0, 3)
            })
            console.log(result);
            
        })
    }

    changeHandler = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        
        return (
            <div>
                <GifSearch 
                    query={this.state.query} 
                    searchHandler={this.searchHandler} 
                    changeHandler={this.changeHandler}
                />
                <GifList list={this.state.image} />
            </div>
        )
    }
}
