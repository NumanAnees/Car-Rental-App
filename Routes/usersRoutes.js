const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
router.post("/login", userController.login);
router.post("/register", userController.register);
module.exports = router;
