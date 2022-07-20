const router = require("express").Router();

const { checkAuth, 
    checkAuthEmployee,
    checkRol 
} = require('../utils')

const { 
    createUser, 
    userLogin,
    showUsers,
    showProfile,
    pastMovies,
    deleteUser, 
    purchaseMovies,
    updateUser,
    updateProfile,
    buyScreening
} = require("../controllers/userController");

router
.post("/", createUser)
.post("/login", userLogin)
.put('/profile', checkAuth, updateProfile)
.put('/:id',checkAuthEmployee, checkRol, updateUser)
.put('/screening/:screeningId',checkAuth, buyScreening)
.get("/", checkAuthEmployee, checkRol, showUsers)
.get('/profile', checkAuth, showProfile)
.get('/pastMovies', checkAuth, pastMovies)
.get('/purchaseMovies',checkAuth, purchaseMovies)
.delete('/:id', checkAuthEmployee, checkRol, deleteUser)

module.exports = router;
