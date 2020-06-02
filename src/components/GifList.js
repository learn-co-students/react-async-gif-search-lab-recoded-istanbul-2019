import React from 'react';

const GifList = ({ urlProp }) => {
    let gifHolder = '';
    if (urlProp.length > 1) {
        gifHolder = urlProp.map(url =>
            <li>
                <img src={url} alt="gif" />
            </li>);
    };
    return (

        <div className='gifList-outcome'>
            <ul>
                {gifHolder}
            </ul>
        </div>

    )
};

export default GifList;
