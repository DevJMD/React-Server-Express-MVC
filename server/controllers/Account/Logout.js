import { EnsureAuthenticated } from '../../middleware';

export const Logout = {

	getLogout: {
		path: '/logout',
		middleware: [EnsureAuthenticated],
		controller(req, res, next) {
			req.logout();
			res.redirect('/');
		}
	}
}
