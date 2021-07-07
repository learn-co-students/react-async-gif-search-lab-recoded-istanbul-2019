import React, { Component } from 'react'

class GifList extends Component {

    state = {
        query: '',
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchData(this.state.query)
    }


    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <input onChange={event => this.setState({ query: event.target.value})} type="text" value={this.state.query}></input>
                </form>
            </div>
        )
    }
}

export default GifList;