export const HomePage = {

	index: {
		path: '/',
		controller(req, res, next) {
			res.render('index', { user: req.user });
		}
	}
}
