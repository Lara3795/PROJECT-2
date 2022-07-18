const router = require("express").Router();

const { checkRol } = require('../utils')

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
    .get('/', checkRol, showEmployees)
    .get('/profile', showProfile)
    .delete('/:id', checkRol, deleteEmployee)
    .put('/profile', updateProfile)
    .put('/:id', checkRol, updateEmployee)


 module.exports = router;