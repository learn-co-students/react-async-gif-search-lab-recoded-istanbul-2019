import React, { Component } from 'react'

export default class GifSearch extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.query} onChange={this.props.changeHandler}></input>
                <button onClick={this.props.searchHandler}>Search</button>
            </div>
        )
    }
}
