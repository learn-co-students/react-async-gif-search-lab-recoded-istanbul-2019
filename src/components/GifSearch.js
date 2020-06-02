import React, { useState } from 'react'

const GifSearch = ({ getInput, inputStatus }) => {
    const [input, setInput] = useState('');
    const callbackToParent = () => getInput(input);
    const stylish = {
        margin: 'auto',
        width: '300px'
    }
    return (

        <div className='search-gif' style={stylish}>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} ></input>
            <button onClick={callbackToParent}>Search</button>
        </div >

    )
}

export default GifSearch
