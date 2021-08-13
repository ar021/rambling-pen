var express = require("express");
var router = express.Router();
var postsCtrl = require("../../controllers/api/posts");
const checkAuth = require("../../config/checkAuth");

/* GET /api/posts */
router.get("/", postsCtrl.index);
// router.get("/:id", postsCtrl.show);
router.use(require("../../config/auth"));
router.post("/", checkAuth, postsCtrl.create);
router.delete("/:id", checkAuth, postsCtrl.delete);
router.put("/:id", checkAuth, postsCtrl.update);

module.exports = router;
