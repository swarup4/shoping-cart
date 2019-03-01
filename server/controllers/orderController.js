let express = require("express");
// let events = require('events');
// let event = new events.EventEmitter();
let logins = require("../helper/logins");
let Order = require("../models/orderModel");


let router = express.Router();

// event.on("Hello", function(){
//     console.log("Event Call");
// });

router.post("/bookOrder", logins.compareTokeTimeOut, (req, res, next) => {
    // event.emit("Hello", "First Event");
    debugger;
    let obj = req.body;
    let model = new Order(obj);
    model.save((err, user) => {
        if (err) {
            res.send(err.message);
        } else {
            res.json({
                success: true,
                token: req.token,
                message: "Order Created"
            });
        }
    });
});

router.get("/getAllOrder", logins.compareTokeTimeOut, (req, res, next) => {
    Order.orderInfo.find({}, (err, order) => {
        if (err) {
            res.send("error");
        } else {
            res.json({
                currentTime: new Date(),
                token: req.token,
                data: order
            });
        }
    });
});

module.exports = router;