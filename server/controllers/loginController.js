let express = require("express");
let path = require("path");
let jwt = require("jsonwebtoken");
let fs = require('fs');
let multer = require('multer');
let User = require("../models/userModel");
let logins = require("../helper/logins");
// let event = require("../common/sessions");

let router = express.Router();
// let counter = 10000;

// let sess;

// Get All User Information. This is Only for Admin User
router.get("/", (req, res) => {
    let user = User.Auth;
    user.find({}, (err, data) => {
        if (err) {
            res.send("error");
            return;
        } else {
            let decoded = jwt.verify(data[0].password, 'shhhhh');
            console.log(decoded);
            // event.emit("getdata");
            logins.checkUser(data);
            console.log(logins.name);
            if (counter-- === 0) {
                cluster.worker.disconnect();
            }
            res.send(data);
        }
    });
});

// Create New User 
// Params Or Object : Name, Username, Password, Email, contactNo
router.post("/signup", logins.checkExestingUser, (req, res) => {
    let obj = req.body;
    let model = new User.Auth(obj);
    // model.password = jwt.sign(obj.password, 'shhhhh');
    model.save((err, user) => {
        if (err) {
            res.send(err.message);
        } else {
            // let decoded = jwt.verify(user.password, 'shhhhh');
            res.send("User Created");
        }
    });
});

// Active Previous Deactivated User. & Deactivate Active User.
router.put("/activeDeactivateUser/:id", (req, res) => {
    let id = req.params.id;
    let status = req.body;
    let user = User.Auth;
    user.findByIdAndUpdate(id, status, (err, user) => {
        if (err) {
            res.send(err);
            console.log(err);
            return;
        } else {
            res.send(user);
        }
    });
});

// Login Users
router.post("/login", (req, res) => {
    let obj = req.body;
    // obj.password = jwt.sign(obj.password, 'ssshhhhh');
    obj.status = true;
    User.Auth.findOne(obj, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            if (user == null) {
                res.send("Username & password is not Valid");
            } else {
                console.log("Success");
                logins.updateToken(user.id, user.username, function(token){
                    res.json({
                        currentTime: new Date(),
                        token: token,
                        username: user.username
                    });
                });                
            }
        }
    });
})

// Insert Varification Code for Forgot Password
// Params Or Object : Username & Varification Code
router.post("/varificationCode", (req, res) => {
    let obj = req.body;

    model.findOneAndUpdate((err, user) => {
        if (err) {
            res.send(err);
        } else {
            console.log("User Data Inserted")
            res.send(user);
        }
    })
})

// Forgot Password for User
router.post("/validateUser", (req, res) => {
    let obj = req.body;
    let model = new User.Details(obj);
    model.save((err, user) => {
        if (err) {
            res.send(err);
        } else {
            console.log("User Data Inserted")
            res.send(user);
        }
    })
})

// Insert Logged in User Details
router.post("/insertUserDetails", (req, res) => {
    let obj = req.body;
    let model = new User.Details(obj);
    model.save((err, user) => {
        if (err) {
            res.send(err);
        } else {
            console.log("User Data Inserted");
            res.send("Success");
        }
    })
})

router.post("/upload", (req, res) => {
    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './application/app/public/images/profilePics/');
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    });

    var upload = multer({ storage: storage }).single('avatars');

    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            let profileObj = {};
            profileObj.profilePics = req.file.originalname;
            profileObj.userId = req.body.userId;
            let profilePics = User.ProfilePics(profileObj);
            profilePics.save((err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Success");
                }
            })
        }
    });
})

// Get Logged in User Details
router.get("/userDetails/:id", (req, res) => {
    let id = req.params.id;
    let user = User.Details;
    user.find({ userId: id }, (err, data) => {
        if (err) {
            res.send("error");
            return;
        } else {
            // var base64 = data.profilePics.toString('base64');
            // data.pics = base64;
            // console.log(data);
            res.send(data.profilePics);
        }
    });
});

// Update Logged in User Details
router.put("/updateUserDetails/:id", (req, res) => {
    let id = req.params.id;
    let obj = req.body;
    let user = User.Details;
    user.findOneAndUpdate({ userId: id }, obj, (err, data) => {
        if (err) {
            res.send(err);
            return;
        } else {
            res.send(data);
        }
    });
});

module.exports = router;