const EmployeeModel = require("../models/employeeModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function createEmployee(req, res) {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hash

        const employee = await EmployeeModel.create(req.body)

        const payload = {email: employee.email}
        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: "1h"})

        res.status(200).json({email: employee.email, token: token})
    } catch (error) {
        console.log(error)
    }
}

async function employeeLogin(req, res) {
try {
    const employee = await EmployeeModel.findOne({email: req.body.email})
    if(!employee) return res.status(500).send('Email or password incorrect')

    bcrypt.compare(req.body.password, employee.password, (err, result) => {
        if(err) return res.status(500).send(`Error: ${err}`)
        if(!result) return res.status(500).send('Email or password incorrect')

        const payload = {email: employee.email}
        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: "1h"}) 

        res.status(200).json({email: employee.email, token: token})
        })

} catch (error) {
    
}

}

async function showEmployees(req, res) {
    try {
        const employee = await EmployeeModel.find()
        res.json(employee)

    } catch (error) {
        console.log(error)
        
    }
}

async function deleteEmployee(req, res) {
    try {
        const employee = await EmployeeModel.findByIdAndDelete(req.params.id)
        res.json(deleteEmployee)
        
    } catch (error) {
        console.log(error)
        
    }
}

async function updateEmployee(req, res) {
    try {
        const updateEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updateEmployee)

    } catch (error) {
       console.log(error)
    }
}


module.exports = {
    createEmployee,
    employeeLogin,
    showEmployees,
    deleteEmployee,
    updateEmployee
}