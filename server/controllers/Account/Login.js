import Passport from 'passport';

export const Login = {

	getLogin: {
		path: '/login',
		controller(req, res, next) {
			if (req.isAuthenticated()) {
				return res.redirect(`/account/${encodeURIComponent(req.user.username)}`);
			}

			res.render('account/login', { csrfToken: req.csrfToken() });
		},
	},

	postLogin: {
		path: '/login',
		method: 'post',
		middleware: [Passport.authenticate('local')],
		controller(req, res, next) {
			return res.redirect(`/account/${encodeURIComponent(req.user.username)}`);
		}
	}
}
