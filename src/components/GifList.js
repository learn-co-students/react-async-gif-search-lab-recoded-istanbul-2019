import React, { Component } from 'react';

const GifList = (props) => {
    return (
        <ul>
            {props.gifs.map(i =>
                    <li>
                        <img src={i.gifs.original.url} alt={i.type}></img>
                    </li>
                )}
        </ul>
    )
}

export default GifList;