var data = require('../data.json');

exports.view = function(req, res){
    console.log("user:" + req.session.userID + "groupID" + req.session.groupID);
   if(req.session.userID == null || req.session.userID == -1){
		res.render('login.handlebars');
	}
    
	res.render('settings', data.Group[req.session.groupID]);
}






exports.changePassword = function(req, res) {

	var newpassword = req.query.newpassword;
	var oldpassword = req.query.oldpassword;
    
            data.Group[req.session.groupID].Members[req.session.userID].password = newpassword;

        res.render('dashboard', data.Group[req.session.groupID]);

}
