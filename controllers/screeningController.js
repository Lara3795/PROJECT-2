const ScreeningModel = require("../models/screeningModel")

async function findScreening(req, res) {
  try {
  const today = new Date(Date.now())
      const screening = await ScreeningModel.find({start: { $gt: today }}, {employee: 0, __v: 0})
      res.json(screening)
    
  } catch (error) {
    console.log(error);
  }
}
async function getAllScreenings(req, res) {
  try {
      const screening = await ScreeningModel.find()
      res.json(screening)
    } catch (error) {
      console.log(error)
    }
  }

  async function findScreeningId(req, res) {
    try {
      const screening = await ScreeningModel.findById(req.params.id)
      res.json(screening)
    } catch (error) {
      console.log(error);
    }
  }

  async function modifyScreening(req, res) {
    try {
      const screening = await ScreeningModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.json(screening)
    } catch (error) {
      console.log(error);
    }
  }

  async function createScreening(req, res) {
    try {
      const screening = await ScreeningModel.create(req.body)
      res.json(screening)
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteScreening(req, res) {
    try {
      const screening = await ScreeningModel.findByIdAndDelete(req.params.id)
      res.json(screening)
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
  findScreening,
  getAllScreenings,
  findScreeningId,
  modifyScreening,
  createScreening,
  deleteScreening
};


