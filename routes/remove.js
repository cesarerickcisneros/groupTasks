var data = require('../data.json');


//CORNER CASES _ duplicates Need confirmation

exports.view = function(req, res){
    
    if(!req.session.userID || req.session.roommateID == -1){
		res.render('login.handlebars');
	}
    
	res.render('remove', data);
}


