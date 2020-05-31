import React, { Component } from 'react';

export default class GifSearch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
		};
	}

	render() {
		return (
			<div>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						this.props.fetchGIF(this.state.query);
					}}>
					<input
						type='text'
						value={this.state.query}
						onChange={(event) => this.setState({ query: event.target.value })}
						placeholder='Search for Gif'></input>
				</form>
			</div>
		);
	}
}
