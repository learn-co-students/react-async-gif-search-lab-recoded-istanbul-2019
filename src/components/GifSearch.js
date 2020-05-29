import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handlerChange}></input>
                <button onClick={this.props.submit}> SEARCH </button>
            </div>
        )
    }
}