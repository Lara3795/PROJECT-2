const UserModel = require("../models/userModel")
const ScreeningModel = require("../models/screeningModel")
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

async function showProfile(req, res) {
  try {
      const userPerfil = await UserModel.findById(res.locals.user.id, {password: 0, __v: 0})
      res.json(userPerfil)

  } catch (error) {
      console.log(error)
  }
}
async function pastMovies(req, res) {
  try {
      const user = await UserModel.findById(res.locals.user.id)
      res.json(user.pastMovies)

  } catch (error) {
      console.log(error)
  }
}
async function purchaseMovies(req, res) {
  try {
      const purchaseMovies = await UserModel.find(res.body, {password: 0, __v: 0, name: 0, age: 0, email: 0, screenings: 0, pastMovies: 0})
      res.json(purchaseMovies)

  } catch (error) {
      console.log(error)
  }
}
async function updateUser(req, res) {
  try {
      const updateUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.json(updateUser)

  } catch (error) {
     console.log(error)
  }
}
async function buyScreening(req, res) {
  try {
  const screening = await ScreeningModel.findById(req.params.screeningId)
  if(!screening) return res.send("Screening not found")
  const user = await UserModel.findById(res.locals.user.id)  
  user.screenings.push(screening.id)
  screening.ocupation.push(user.id)
  await user.save()
  await screening.save()
  res.json({screening: screening, message: "Screening purchased"})
}catch (error){
console.log(error)
}
}
async function updateProfile(req, res) {
  try {
      const updatProfile = await UserModel.findByIdAndUpdate(res.locals.user.id, req.body, {new: true})
      res.json(updatProfile)


  } catch (error) {
      
  }
}
async function deleteUser(req, res) {
  try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      res.json(user)

  } catch (error) {
      console.log(error)

  }
}
module.exports = {
  createUser,
  userLogin,
  showUsers,
  showProfile,
  deleteUser,
  pastMovies,
  purchaseMovies,
  updateUser,
  buyScreening,
  updateProfile
};
