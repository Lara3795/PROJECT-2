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
.post("/", checkAuth, checkRol, createUser)
.post("/login", userLogin)
.put('/profile', updateProfile)
.put('/:id', updateUser)
.put('/screening/:screeningId',checkAuth, buyScreening)
.get("/", checkAuth, checkRol, showUsers)
.get('/profile', checkAuth, showProfile)
.get('/pastMovies', checkAuth, pastMovies)
.get('/purchaseMovies', purchaseMovies)
.delete('/:id', deleteUser)

module.exports = router;
