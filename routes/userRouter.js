const router = require("express").Router();

const { 
    createUser, 
    userLogin,
    showUsers 
} = require("../controllers/userController");

router
.post("/", createUser)
.post("/login", userLogin)
.get("/", showUsers)

module.exports = router;
