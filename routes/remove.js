

//CORNER CASES _ duplicates Need confirmation

exports.view = function(req, res){
    
   if(req.session.userID == null || req.session.roommateID == -1){
		res.render('login.handlebars');
   }
    
	res.render('remove', data);
}


