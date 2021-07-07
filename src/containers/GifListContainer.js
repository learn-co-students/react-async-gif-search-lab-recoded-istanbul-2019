import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from "../components/GifList";

class GifListContainer extends React.Component {
    state = {
        imagePath: [],
        search: ''
    }

    fetchData = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                imagePath: json.data.slice(0,3)
            })
        })
    }

    componentDidMount() {
        this.fetchData()
    }
    
    searchHandle = (input) => {
        this.setState({
            search: input.target.value
        })
    }

    render(){
       return ( <div>
            <GifSearch onFetchData={this.fetchData} searchHandle={this.searchHandle} />
            <GifList imagePath={this.state.imagePath} />
        </div>
       )
    }
}

export default GifListContainer