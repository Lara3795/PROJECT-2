const router = require("express").Router();

const { checkAuth, 
    checkRole 
} = require('../utils')

const {
    createEmployee,
    employeeLogin,
    showEmployees,
    showProfile,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeeController');

router

    .post('/', createEmployee)
    .post('/login', employeeLogin)
    .get('/', showEmployees)
    .get('/profile', checkAuth, checkRole, showProfile)
    .delete('/:id', deleteEmployee)
    .put('/:id', updateEmployee)


 module.exports = router;