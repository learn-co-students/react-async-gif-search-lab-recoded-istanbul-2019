import React, { useState, useEffect } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const GifListContainer = (props) => {
    const [API_PATH, changePath] = useState('');
    const [urls, setUrls] = useState('');
    const API_KEY = '1TEauw2SmJv06UHNkDT0WT8Zbf7mjKcL';
    const handlePath = (input) => input && changePath(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${API_KEY}`);
    const wantedCount = 5;

    useEffect(() => {
        const doFetch = async () => {
            const response = await fetch(API_PATH);
            const { data: gif_items } = await response.json();
            const datas_to_fetch = gif_items.slice(0, wantedCount).map((item, index) => item);
            return getFetch(datas_to_fetch);
        };
        (API_PATH !== '') && doFetch();
    }, [API_PATH]);

    const getFetch = (three_data) => {
        return setUrls(three_data.map((item) => {
            let { images: { original: { url } } } = item;
            return url;
        }));
    };

    return (
        <div>
            <GifSearch getInput={handlePath} />
            <GifList urlProp={urls} />
        </div>
    )
};

export default GifListContainer;
