import React, { Component } from 'react'


export class GifSearch extends Component {
    render() {
        return (
            <form onSubmit = {(e) => this.props.submit(e)}>
               <input type = "text" />
               <button type = "submit">Find</button>
            </form>
        )
    }
}

export default GifSearch
