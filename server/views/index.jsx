import React, { Component } from 'react';
import DefaultLayout from './layout/default';

class Homepage extends Component {

	render() {

		return (
			<DefaultLayout title={this.props.title}>
				<h1>Homepage</h1>
			</DefaultLayout>
		);
	}
}

export default Homepage;
