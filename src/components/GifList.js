import React, { Component } from 'react';

export default class GifList extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.gifUrl.map((gifUrl, index) => (
						<li key={index}>
							<img src={gifUrl.images.original.url} width='200px' />
						</li>
					))}
				</ul>
			</div>
		);
	}
}
