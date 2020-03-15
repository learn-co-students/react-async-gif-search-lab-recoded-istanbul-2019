import React from 'react'

export default function GifList(props) {
    return (
        <div>
            <ul>
                <li>{props.gifs}</li>
            </ul>
        </div>
    )
}
