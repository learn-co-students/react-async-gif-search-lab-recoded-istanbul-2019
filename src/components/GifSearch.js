import React, { Component } from "react";

class GifSearch extends Component {
    
    handleSearch = (event) => {
        this.props.handleSubmit(event.target.value)
    }
    
    render() {
        return (
            <div>
                <h4>Enter a Search Term:</h4>
                <form >
                <input type="text" onChange={this.handleSearch}></input>
                </form>
                <button type="submit" style={{color:"green"}}>Find Gifs</button>
            </div>
        )
    }
}

export default GifSearch