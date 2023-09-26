const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth");
const auth = middleware.auth;

const taskController = require("../controllers/Task");

router.get("/get-task",taskController.getTask);
router.post("/create-task",taskController.createTask);


module.exports = router;