const router = require("express").Router();

const { checkAuth, 
    checkAuthEmployee,
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
    .post('/profile', checkAuthEmployee, updateProfile)
    .get('/', showEmployees)
    .get('/profile', checkAuthEmployee, showProfile)
    .delete('/:id', deleteEmployee)
    .put('/:id', updateEmployee)


 module.exports = router;