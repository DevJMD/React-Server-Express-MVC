import { EnsureAuthenticated } from '../../middleware';

export const Account = {

	getAccountDefault: {
		path: '/account',
		middleware: [EnsureAuthenticated],
		controller(req, res, next) {
			return res.redirect(`/account/${encodeURIComponent(req.user.username)}`);
		},
	},

	getAccount: {
		path: '/account/:username',
		middleware: [EnsureAuthenticated],
		controller(req, res, next) {
			if (req.params.username === req.user.username) {
				return res.render('account/profile', { user: req.user });
			}
		},
	}
}
