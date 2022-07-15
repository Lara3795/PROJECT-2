const router = require("express").Router();

const { 
    createUser, 
    userLogin 
} = require("../controllers/userController");

router
.post("/", createUser)
.post("/login", userLogin)

module.exports = router;
