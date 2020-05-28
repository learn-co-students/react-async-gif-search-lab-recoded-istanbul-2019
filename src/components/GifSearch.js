import React from 'react'

class GifSearch extends React.Component {
    render() {
        return(
            <div className="search-form">
                <input type="text" onChange={this.props.searchHandle}></input>
                <button type="submit" onClick={this.props.onFetchData}>Search</button>
            </div>
        )
    }
}

export default GifSearch