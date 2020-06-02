import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
export default class GifListContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifUrl: [],
		};
	}
	componentDidMount() {
		this.fetchGifFunc();
	}
	fetchGifFunc = async (query = 'dolphin') => {
		const res = await fetch(
			`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
		);
		const response = await res.json();
		let gifImagesUrl = response.data.filter((element, index) => {
			return index < 3;
		});
		// element.images.original.url;
		//gifImagesUrl = gifImagesUrl.slice(0, 3);
		console.log(gifImagesUrl);
		this.setState({
			gifUrl: gifImagesUrl,
		});
	};
	render() {
		return (
			<div>
				<GifSearch fetchGIF={this.fetchGifFunc} />
				<GifList gifUrl={this.state.gifUrl} />
			</div>
		);
	}
}
