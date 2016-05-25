import React, { Component } from 'react';

class Register extends Component {

	render() {

		return(
			<div>
				<form method="POST" action="/register">
					<input type="hidden" name="_csrf" value={this.props.csrfToken}/>
					<label for="username">Username</label>
					<input name="username" type="text"/>
					<label for="password">Password</label>
					<input name="password" type="password"/>
					<button type="submit">Create account</button>
				</form>
			</div>
		);
	}
}

export default Register;
