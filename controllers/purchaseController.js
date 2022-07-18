const PurchaseModel = require("../models/purchaseModel");

async function createPurchase(req, res) {
  try {
    const purchase = await PurchaseModel.create(req.body);
    res.json(purchase);
  } catch (error) {
    console.log(error);
  }
}
async function findPurchaseList(req, res) {
  try {
    const purchase = await PurchaseModel.find();
    res.json(purchase);
  } catch (error) {
    console.log(error);
  }
}

async function findPurchaseNumber(req, res) {
  try {
    const purchase = await PurchaseModel.findById(req.params.id);
    res.json(purchase);
  } catch (error) {
    console.log(error);
  }
}

async function findPurchaseAndUpdate(req, res) {
  try {
    const purchase = await PurchaseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(purchase);
  } catch (error) {
    console.log(error);
  }
}

async function findByIdAndDelete(req, res) {
  try {
    const purchase = await PurchaseModel.findByIdAndDelete(req.params.id);
    res.json(purchase);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  createPurchase,
  findPurchaseList,
  findPurchaseNumber,
  findPurchaseAndUpdate,
  findByIdAndDelete,
};
