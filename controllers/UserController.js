var User = require('../models/User');
var userController = {};

userController.login = async (req, res) => {
    User.find({username: req.body.username, password: req.body.password}).exec(async function (err, user) {
        if (err) {
            console.log("Error", err);
        } else {
            if (user.length == 0){
                res.render("../views/users/login", {title: 'WareHouse Management', message: "Username or Password in valid!"});
            } else {
                User.find({}).exec(async (err, user) => {
                    if (err) {
                        console.log("Error", err);
                    } else {
                        res.render("../views/index", { request: user});
                    }
                });
            }
        }
    });
};

userController.register = async (req, res) => {
    var user = new User(req.body);
    user.save(async (err, user) => {
        if (err) {
            console.log("Error", err);
            res.render("../views/users/register");
        } else {
            console.log("Success");
            res.redirect("../login");
        }
    });
};
module.exports = userController;