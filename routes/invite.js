var nodemailer = require("nodemailer");
var data = require('../data.json');

exports.view = function(req, res){
    if(!req.session.userID || req.session.roommateID == -1){
		res.render('login.handlebars');
	}
    
	res.render('invite');
};


exports.mail = function (req,res) {

var name1 = req.query.friend1name;    
var email1 = req.query.friend1email;
console.log("first email" + email1 + "first name" + name1);
            
    // create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "taskitapplication@gmail.com",
        pass: "groupgroup"
    }
});


// setup e-mail data with unicode symbols
var mailOptions = {
    
    
    from: "Checkmates <checkmatesapp@gmail.com>", // sender address
    to: email1, // list of receivers
    subject: "Invitation from " + data.Group[req.session.groupID].Members[req.session.userID].name + " to Join Checkmates Today!", // Subject line
    text: "Join our App", // plaintext body
    html: "<b>Hey " + name1 +", <br> " + data.Group[req.session.groupID].Members[req.session.userID].name + " has just sent you an invitation to join their group on Checkmates. Checkmates is an app to easily share tasks amoung a group of people. <br><br> Group Name: " + data.Group[req.session.groupID].groupname + "<br> Group Password: " + data.Group[req.session.groupID].grouppassword + "<br><br>Use this group information to make an account at checkmates.herokuapp.com.</b>" // html body

}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
        res.render('dashboard', data.Group[req.session.groupID]);
    }
    
    

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
};