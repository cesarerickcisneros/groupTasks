var data = require('../data.json');


//CORNER CASES _ duplicates Need confirmation

exports.view = function(req, res){
    
   /* if(!req.session.userID && req.session.userID != 0){
		res.render('login.handlebars');
	}*/
    
	res.render('addtask', data.Group[req.session.groupID]);
}




