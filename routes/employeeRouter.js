const router = require("express").Router();

const { checkAuth, 
    checkAuthEmployee,
    checkRol
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

    .post('/', checkRol, createEmployee)
    .post('/login', employeeLogin)
    .post('/profile', checkAuthEmployee, updateProfile)
    .get('/', showEmployees)
    .get('/profile', checkAuthEmployee, showProfile)
    .delete('/:id', checkRol, deleteEmployee)
    .put('/:id', checkRol, updateEmployee)


 module.exports = router;