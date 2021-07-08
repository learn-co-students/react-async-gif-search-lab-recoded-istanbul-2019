import React, { Component } from 'react'

 class GifSearch extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.handlerChange}></input>
                <button onClick={this.props.handlerSubmit}>searh</button>
            </div>
        )
    }
}
export default GifSearch