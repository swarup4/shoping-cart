let express = require("express");
let router = express.Router();
let path = require("path");

let abspath = path.join(__dirname + "./../../application/app");

router.get("/", (req, res, next) => {
    res.sendFile(abspath + "/index.html");
});

module.exports = router;