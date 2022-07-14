const router = require("express").Router();

const {
    createEmployee,
    employeeLogin,
    showEmployees,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeeController');

router

    .post('/', createEmployee)
    .post('/login', employeeLogin)
    .get('/', showEmployees)
    .delete('/:id', deleteEmployee)
    .put('/:id', updateEmployee)


 module.exports = router;