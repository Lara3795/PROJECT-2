const jwt = require('jsonwebtoken')
const EmployeeModel = require('../models/employeeModel')

function checkAuth (req, res, next) {
    console.log(req.headers)
    if (!req.headers.token) {
        res.status(403).send(`Token not found`)
    }else{
        jwt.verify(req.headers.token, process.env.SECRET, async (err, token) => {
            if (err) {
                res.status(403).send('Token not valid')
            }
            const user = await EmployeeModel.findOne({email: token.email})
            res.locals.user = user 
            next()
        })
    }
}

function checkRol (req, res, next) {
if (res.locals.user.rol !== 'admin') {
    return res.send('user not autorized')
}
next()
}


module.exports = {
    checkAuth,
    checkRol
}