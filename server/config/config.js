var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongodb://david.poole:multivision@ds035740.mongolab.com:35740/multivision-db',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}