import React, { Component } from 'react'

export class GifList extends Component {

    newData = () =>{
        let info  = [];
        for(let i =0 ; i < 3 ; i++){
            info.push(<li><img src ={this.props.gif.data[i].images.original.url} alt ="hi" /></li>)
        }
        return info;
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.gif.data ? this.newData():null}
                </ul>
            </div>
        )
    }
}

export default GifList
