const cors = require('cors');

const whitelist = [ 'https://project-management-front.herokuapp.com' ];

const corsOptions = {
	origin: (origin, cb) => {
		const originIsWhitelisted = whitelist.includes(origin);
		cb(null, originIsWhitelisted);
	},
	credentials: true
};

module.exports = (app) => app.use(cors(corsOptions));
