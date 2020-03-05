import React, {Component} from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer  extends Component{
    constructor(){
        super();
        this.state={
            gifList:[],
            search: ""
        }
    }
    changeHandler = (e)=>{
        this.setState({search:e.target.value})
    }
    submitHandler = (e)=>{
        const query = this.state.search
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=XpXY66L0nihPt9vI6OxeBSEn76GdOtCK&rating=g`)
        .then(res => res.json() )
        .then(data => this.setState({gifList: data.data.slice(0,3)}) )
    }
    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=XpXY66L0nihPt9vI6OxeBSEn76GdOtCK&rating=g")
        .then(res => res.json() )
        .then(data => this.setState({gifList: data.data.slice(0,3)}) )
    }
    render(){
        return (
            <div>
                <GifList list={this.state.gifList} />
                <GifSearch 
                changeHandler={this.changeHandler} 
                submitHandler={this.submitHandler} 
                search={this.state.search} 
                />
            </div>
        )
    }
}