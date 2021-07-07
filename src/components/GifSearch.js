import React, { Component } from 'react'

export default class GifSearch extends Component {
    state={
        inputValue:""
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.state.inputValue)
        this.props.submitHandler(this.state.inputValue)
    }
    render() {
        //console.log(this.state.inputValue)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Enter a Search Term:
                <input type="text" value={this.state.inputValue} onChange={event => this.setState({inputValue: event.target.value})}/>
                </form>

            </div>
            
        )
    }
}
