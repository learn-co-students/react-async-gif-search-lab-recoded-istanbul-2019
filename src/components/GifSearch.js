import React from 'react'
import { ProgressPlugin } from 'webpack'

export default class GifSearch extends React.Component {
    state={
        searchWord:""
    }
    handleChange=(event)=>{
        this.setState({
            searchWord:event.target.value
        })
    }
    render(){

        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Searc for gifs
                    <input onChange={this.handleChange} type="text"/>
                    </label>
                </form>
            </div>
        )
    }
}
