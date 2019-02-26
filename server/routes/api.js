let express = require("express");
let loginRouter = express.Router();
let orderRouter = express.Router();

let loginController = require("../controllers/loginController.js");
let orderController = require("../controllers/orderController.js");

loginRouter.use("/api/user", loginController);

orderRouter.use("/api/order", orderController);

module.exports.users = loginRouter;
module.exports.order = orderRouter;