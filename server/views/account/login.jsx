import React, { Component } from 'react';

class Login extends Component {

	render() {

		return(
			<div>
				<form method="POST" action="/login">
					<input type="hidden" name="_csrf" value={this.props.csrfToken}/>
					<label for="username">Username</label>
					<input name="username" type="text"/>
					<label for="password">Password</label>
					<input name="password" type="password"/>
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
