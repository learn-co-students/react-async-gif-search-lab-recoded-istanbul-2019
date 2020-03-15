import React, { Component } from 'react'
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"
// const API_URL=`https://api.giphy.com/v1/gifs/search?q=$dolphin&api_key=bHo41zBAxXhdoGgcpRqK4trRnB1DeSZ2&rating=g`

export default class GifListContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            gifs:[]
        }
    }

    componentDidMount(){
        const url=this._constructUrl("dolphin")
        fetch(url)
        .then(res=>res.json())
        .then(query => this.setState({
            gifs:query
        }))
    }

    handleSubmit=()=>{
        
    }
    _constructUrl=(word)=>{
        return `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=bHo41zBAxXhdoGgcpRqK4trRnB1DeSZ2&rating=g`
    }
    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList />
            </div>
        )
    }
}
