import React from 'react';

export default class GifSearch extends React.Component{

    /*constructor(){
        super()
        this.state={
            keyWord=""
        }
    }*/

    render(){
        return(
            <div>
                    <input type="text" name="search" onChange={this.props.handleChange} />
                    <button onClick={this.props.handleSubmit}>Submit</button>
            </div>
        )
    }


}