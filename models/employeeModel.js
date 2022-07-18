const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    rol: {
        type: String,
        enum: ["admin", "employee"],
        default: "employee"
    }
})

const EmployeeModel = mongoose.model('employee', employeeSchema)

module.exports = EmployeeModel