import User from '../../models/User';

export const Register = {

	getRegister: {
		path: '/register',
		controller(req, res) {
			if (req.isAuthenticated()) {
				return res.redirect(`/account/${encodeURIComponent(req.user.username)}`);
			}

			res.render('account/register', { csrfToken: req.csrfToken() });
		}
	},

	postRegister: {
		path: '/register',
		method: 'post',
		controller(req, res, next) {
			if (req.isAuthenticated()) {
				return res.redirect(`/account/${encodeURIComponent(req.user.username)}`);
			}

			User.register(new User({ username: req.body.username }), req.body.password, (err) => {
				if (err) {
					console.log('Error registering user.', err);
					return next(err);
				}

				res.redirect('/login');
			});
		}
	}
}
