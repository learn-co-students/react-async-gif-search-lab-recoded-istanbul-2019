import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handleChange}></input>
                <button onClick={this.props.handleSubmit}>Find Gifs</button>
            </div>
        )
    }
}
