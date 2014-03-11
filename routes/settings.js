var data = require('../data.json');

exports.view = function(req, res){
    if(!req.session.userID || req.session.roommateID == -1){
		res.render('login.handlebars');
	}
    
	res.render('settings');
}

exports.changePassword = function(req, res) {

	var newpassword = req.query.newpassword;
	var oldpassword = req.query.oldpassword;
    
    //    if(oldpassword == data.Roommates[roommateID].password){
            data.Group[req.session.groupID].Members[req.session.userID].password = newpassword;
   /*     }
        else{
            //console log error message
        }*/
        res.render('dashboard', data.Group[req.session.groupID]);

}
