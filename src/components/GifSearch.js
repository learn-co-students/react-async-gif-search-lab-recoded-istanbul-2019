import React, { Component } from 'react';

export default class GifSearch extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.search} onChange={this.props.handleChange}/>            
                <button onClick={this.props.handleSubmit}>Submit!</button>
            </div>
        )
    }
}