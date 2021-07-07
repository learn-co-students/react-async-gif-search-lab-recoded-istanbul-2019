import React, { Component } from 'react'

class GifList extends Component {

    state = {
        element: '',
    };
    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchData(this.state.element)
    };
    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <input
                     onChange={event => this.setState({ element: event.target.value})}
                     type="text" 
                     value={this.state.element}>
                    </input>
                </form>
            </div>
        )
    }
};

export default GifList;