exports.view = function(req, res) {

    res.render('index');

}

exports.logout = function(req,res){
	req.session.userID = -1;
    req.session.groupID = -1;
	res.render('index');
}