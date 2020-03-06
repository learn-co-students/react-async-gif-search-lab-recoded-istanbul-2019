import React from 'react';

export default class GifList extends React.Component{

    render(){
        return(
            <ul>
                {this.props.images.map(i =>
                    <li>
                        <img src={i} alt=""></img>
                    </li>
                )}
            </ul>
        )
    }

}