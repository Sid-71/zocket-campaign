const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth");
const auth = middleware.auth;
const userController = require("../controllers/User");


router.post("/signup",auth,userController.signup);
router.post("/signin",auth,userController.signin);


module.exports = router;