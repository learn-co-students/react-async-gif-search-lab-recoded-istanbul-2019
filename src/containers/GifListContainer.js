import React, { Component } from 'react'
import GifSearch from "../components/GifSearch"
import GifList from "../components/GifList"
export default class GifListContainer extends Component {
    constructor(){
        super();
        this.state={
            searchInput:"",
            list:[]
        }
    }
    handlerChange=(event)=>{
this.setState({
    searchInput:event.target.value
})
    }
    submit=()=>{
        let send=this.state.search
        fetch(`https://api.giphy.com/v1/gifs/search?q=${send}&api_key=enkgIPBn2zf6bh9y77gmj7ip8gPMSp6r&rating=g`)
        .then(res=>res.json()).then(data=>{
            this.setState({list:data.data})
        })    }
        componentDidMount=()=>{
           
            fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=enkgIPBn2zf6bh9y77gmj7ip8gPMSp6r&rating=g")
            .then(res=>res.json()).then(data=>{
                this.setState({list:data.data})
            })    }
    render() {
        return (
            <div>
                <GifSearch search={this.state.searchInput}
                handlerChange={this.handlerChange}
                submit={this.submit}
                />
                <GifList list={this.state.list}></GifList>
            </div>
        )
    }
}
