let async = require('async');
let jwt = require("jsonwebtoken");
let User = require("../models/userModel");

let loginObj = {};
loginObj.checkUser = (data) => {
    async.waterfall([
        myFirstFunction,
        mySecondFunction,
        lastFunction
    ], function (err, result) {
        // result now equals 'done'
        console.log("Error Block");
        console.log(err);
        console.log(result);
    });

    function myFirstFunction(callback) {
        callback(null, data);
    }
    function mySecondFunction(arg1, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log("Second Function");
        let err = "Data is not there";
        if(!arg1){
            callback(err, null);
        }else{
            callback(null, arg1, "Two");
        }
    }
    function lastFunction(arg1, arg2, callback){
        console.log("Third Function");
        console.log(arg2);
        callback(null, arg1);
    }
}

// Check Username for User is Exist or Not. & Also Check User Status.
// Params Or Object : Username
loginObj.checkExestingUser = (req, res, next) => {
    let obj = req.body;
    User.Auth.findOne({ $or: [{ username: obj.username }, { email: obj.email }] }, (err, data) => {
        if (err) {
            res.send(err.message);
        } else {
            if (data) {
                let emailMsg = "", userMsg = "";
                if (data.email == obj.email) {
                    emailMsg = "Email is Already Exist.";
                }
                if (data.username == obj.username) {
                    userMsg = "Username is Already Exist.";
                }
                res.send(emailMsg + " " + userMsg);
            } else {
                next();
            }
        }
    })
}

loginObj.updateToken = (id, username, next) => {
    let token = jwt.sign({ id: id, username: username, time: new Date() }, 'ssshhhhh');
    User.Auth.findByIdAndUpdate(id, { token: token }, (err, user) => {
        if (err) {
            console.log(err);
            res.send(err.message);
        } else {
            debugger;
            next(user.token);
        }
    });
}

loginObj.compareTokeTimeOut = (req, res, next) => {
    debugger;
    let token = req.headers.authorization;
    let tokenData = jwt.verify(token, 'ssshhhhh');
    let tokenTime = new Date(tokenData.time);
    let currentTime = new Date();
    var minutes = (currentTime.getTime() - tokenTime.getTime()) / 60000;
    if(minutes > 30){
        res.send("Session Timeout");
    }else{
        loginObj.updateToken(tokenData.id, tokenData.username, function(token){
            req.token = token;
            next();
        })
    }
}

module.exports = loginObj;