import React, { Component } from 'react';

class Profile extends Component {

	render() {

		return(
			<div>
				<h2>Profile</h2>
				<p>Hey, {this.props.user.username}! <a href="/logout">Logout</a></p>
			</div>
		);
	}
}

export default Profile;
