
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { 
		title: 'Home page',
		page: 'Home'
	});
};