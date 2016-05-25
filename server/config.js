/**
 * Server-specific conguration.
 * @type {Object}
 */
export const server = {

	// Namespace is used to set keys (such as secrets) plus
	// configurable options, cookies, etc.
	namespace: 'App',

	// Server environment.
	envrionment: 'development',

	// Where static assets (such as CSS, JS and images) live.
	assets     : 'public',

	// Exposed static asset route, e.g. /assets/css/style.min.css
	assetPath  : '/assets',

	// Set the server view engine.
	viewEngine : 'jsx',

	// Where your application views live.
	viewPath   : 'server/views',
};





/**
 * Database-specific conguration.
 * @type {Object}
 */
export const database = {
	host: 'localhost',
	name: 'App',
	port: null,
	password: null
};
