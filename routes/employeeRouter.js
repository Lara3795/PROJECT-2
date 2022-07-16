const router = require("express").Router();

const { checkAuth, 
    checkRole 
} = require('../utils')

const {
    createEmployee,
    employeeLogin,
    updateProfile,
    showEmployees,
    showProfile,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeeController');

router

    .post('/', createEmployee)
    .post('/login', employeeLogin)
    .post('/profile', checkAuth, updateProfile)
    .get('/', showEmployees)
    .get('/profile', checkAuth, showProfile)
    .delete('/:id', deleteEmployee)
    .put('/:id', updateEmployee)


 module.exports = router;