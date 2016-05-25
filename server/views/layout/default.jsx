import React, { Component } from 'react';

class AuthLinks extends Component {

	render() {

		var Links;

		if (!this.props.isAuthenticated) {
			Links = (
				<div>
					<a href="/login">Sign In</a>
					<span> or </span>
					<a href="/register">Register</a>
				</div>
			);
		} else {
			Links = (
				<div>
					<a href="/logout">Sign Out</a>
				</div>
			);
		}

		return (
			<div>{Links}</div>
		);
	}
}

class DefaultLayout extends Component {

	render() {
		return (
			<html>
				<head><title>{this.props.title}</title></head>
				<body>
					<AuthLinks/>
					{this.props.children}
				</body>
			</html>
		);
	}
}

export default DefaultLayout;
