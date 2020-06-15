import React from 'react';

const GifList = ({ urlProp }) => {
    const stylish = {
        listStyle: "none",
        display: "inline-block",
        marginLeft: "10px"
    }
    const gifContainer = {
        width: '100vw',
        margin: 'auto',
        marginTop: '20px'
    }
    let gifHolder = '';
    if (urlProp.length > 1) {
        gifHolder = urlProp.map(url =>
            <li style={stylish}>
                <img src={url} alt="gif" width="150px" height="150px" />
            </li >);
    };
    return (

        <div className='gifList-outcome' style={gifContainer}>
            <ul style={{ textAlign: 'center' }}>
                {gifHolder}
            </ul>
        </div>

    )
};

export default GifList;