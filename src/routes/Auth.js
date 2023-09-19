const express = require("express");
const router = express.Router();
const checkLogin = require("../middleware/checkLogin");

const AuthControllers = require("../Controllers/AuthController");

// create user
router.post("/create-user", checkLogin,AuthControllers.createUser)
router.delete("/:id/delete-user", checkLogin,AuthControllers.deleteUser)

// authentication 
router.get("/get-current",checkLogin, AuthControllers.getCurrent);
router.post("/login", AuthControllers.login);

module.exports = router;