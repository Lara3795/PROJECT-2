const UserModel = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



async function createUser(req, res) {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hash

    const user = await UserModel.create(req.body);

    const payload = {email: user.email}
    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '1h'})

    res.status(200).json({email: user.email, token: token})
    
  } catch (error) {
    console.log(error);
  }
}

async function userLogin(req, res){
  try {
  const user = await UserModel.findOne({email: req.body.email})
  if(!user) return res.status(500).send('Email or password incorrect')
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if(err) return res.status(500).send(`Error: ${err}`)
    if(!result) return res.status(500).send('Email or password incorrect')

    const payload = {email: user.email}
    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '1h'})

    res.status(200).json({email: user.email, token: token})
  })

  } catch (error) {
    console.log(`Error login user ${error}`)
  }
}

async function showUsers(req, res) {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (error) {
    console.log(error)
  }
}
async function pastMovies(req, res) {
  try {
      const pastMovies = await UserModel.findById(res.locals.user.id, {password: 0, __v: 0, name: 0, age: 0, email: 0, screenings: 0, purchases: 0})
      res.json(pastMovies)

  } catch (error) {
      console.log(error)
  }
}
module.exports = {
  createUser,
  userLogin,
  showUsers
};
