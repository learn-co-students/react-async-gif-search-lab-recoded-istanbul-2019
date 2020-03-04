import React, { Component } from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[
                {
                  "type": "gif",
                  "id": "l0HlNQ03J5JxX6lva",
                  "slug": "bbc-wildlife-l0HlNQ03J5JxX6lva",
                  "url": "https://giphy.com/gifs/bbc-wildlife-l0HlNQ03J5JxX6lva",
                  "bitly_gif_url": "https://gph.is/2iC32M8",
                  "bitly_url": "https://gph.is/2iC32M8",
                  "images": {
                    "fixed_height_still": {
                      "url": "https://media0.giphy.com/media/l0HlNQ03J5JxX6lva/200_s.gif?cid=e1bb72ff5b9fa2866168584b51f13892",
                      "width": "400",
                      "height": "200",
                      "size": "55556"
                    },
                    "original": {
                      "url": "https://media0.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif?cid=e1bb72ff5b9fa2866168584b51f13892",
                      "width": "480",
                      "height": "240",
                    }
                  }
                }
                ],
            q:"all"
        }
    }
    

    getGifs = () =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.q}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            let array = json.data.slice(0,3)             
            this.setState({data:array})
        })
    }
    
    componentDidMount(){
        this.getGifs()
    }
    
    handelChange = (value) => {
        this.setState({
            q:value
        })

        this.getGifs()
    }
    
    render() {        
        return (
            <div>
                <GifSearch handelChange={this.handelChange} />
                <GifList gifList={this.state.data}/>
            </div>
        )
    }
}
