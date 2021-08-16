var express = require("express");
var router = express.Router();
var usersCtrl = require("../../controllers/api/users");

router.get("/:id", usersCtrl.update);
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

module.exports = router;
