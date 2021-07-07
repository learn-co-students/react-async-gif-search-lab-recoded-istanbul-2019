import React, { Component } from 'react'
import GiftList from '../components/GifList'
import GiftSearch from '../components/GifSearch'

export class GifListContainer extends Component {

    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    
    fetchSearch = (textData) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${textData}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(response => response.json())
          .then(data => {
            this.setState({
               gifs: data
            })
            console.log(textData)
          })
      }
    
     handleSubmit = (e) =>{
        e.preventDefault()
        this.fetchSearch(e.target[0].value);
     }


    render() {
        return (
            <div>
                <GiftSearch submit = {this.handleSubmit}/>
                <GiftList  gif = {this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer
