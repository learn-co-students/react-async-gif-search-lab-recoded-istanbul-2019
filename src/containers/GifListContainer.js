import React,{ Component  } from 'react'
//import axios from 'axios';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state={
        gifs:[]
    }
    componentDidMount() {
        this.submitHandler()
      }
  
    submitHandler= async (query = "dolphins")=>{
        const res= await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        const data= await res.json()
        this.setState({ gifs: data.data.map( gif => ({ url: gif.images.original.url }) ) })

      }
    
    render() {
        console.log(this.state.gifs)
        return (
            <div>
                <GifSearch submitHandler={this.submitHandler}/>
                <GifList gifs={this.state.gifs}/>
               
            </div>
        )
    }
}

