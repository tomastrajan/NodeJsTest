var db = require('../database');

exports.list = function(req, res){
	db.getUsers(function(users) {
		res.render('user', { 
			title: 'User list', 
			page: 'Users',
			users : users 
		});
	});

};