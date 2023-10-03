const express = require("express");
const router = express.Router();
const checkLogin = require("../middleware/checkLogin");
const upload = require("../middleware/upload");

const AuthControllers = require("../Controllers/Auth.controller");

// create user
router.post("/create-user", checkLogin,upload.single("avatar"),AuthControllers.createUser)
router.delete("/:id/delete-user", checkLogin,AuthControllers.deleteUser)
router.put("/edit-current-user", checkLogin,upload.single("avatar"),AuthControllers.editCurrentUser)

// authentication 
router.get("/get-all-user",checkLogin, AuthControllers.getAllUser);
router.get("/get-current",checkLogin, AuthControllers.getCurrent);
router.get("/:id/get-current",checkLogin, AuthControllers.getCurrentById);
router.put("/:id/edit",checkLogin,upload.single("avatar"), AuthControllers.editUser);
router.post("/login", AuthControllers.login);

module.exports = router;