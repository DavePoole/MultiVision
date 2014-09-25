var passport = require('passport');

module.exports = function(app) {

	app.get('/partials/*', function(req, res) {
	res.render('../../public/app/' + req.params[0]);
	});

	app.post('/login', function(req, res, next) {
		console.log("Logging In!");
		var auth = passport.authenticate('local', function(err, user) {
			console.log("Authenticating");
			if(err) {return next(err);}
			if(!user) { res.send({success:false})}
			req.logIn(user, function(err) {
				console.log("Success");
				if(err) {return next(err);}
				res.send({success:true, user: user});
			})
		})
		auth(req, res, next);
	})	

	app.get('*', function(req, res) {
		res.render('index');
	});
}