var data = require('../data.json');

exports.view = function(req, res){
    
   if(req.session.userID == null || req.session.userID == -1){
		res.render('login.handlebars');
	}
    
	res.render('addtask', data.Group[req.session.groupID]);
}




