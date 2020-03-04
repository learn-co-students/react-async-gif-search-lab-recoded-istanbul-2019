import React, { Component } from 'react'

export default class GifSearch extends Component {

    handelChange = (event) => {
        this.props.handelChange(event.target.value)
    }
    
    render() {
        return (
            <div>
                <input id="search" onChange={this.handelChange} />
            </div>
        )
    }
}
