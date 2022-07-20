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

    .post('/', createEmployee)
    .post('/login', employeeLogin)
    .post('/profile', checkAuthEmployee, updateProfile)
    .get('/',checkAuthEmployee, checkRol, showEmployees)
    .get('/profile', checkAuthEmployee, showProfile)
    .delete('/:id',checkAuthEmployee, checkRol, deleteEmployee)
    .put('/:id',checkAuthEmployee, checkRol, updateEmployee)


 module.exports = router;