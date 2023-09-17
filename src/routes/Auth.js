const express = require("express");
const router = express.Router();

const AuthControllers = require("../Controllers/AuthController");

// get all items 
router.get("/get-current", AuthControllers.getCurrent);
router.post("/login", AuthControllers.login);

module.exports = router;