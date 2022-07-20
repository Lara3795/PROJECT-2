const router = require("express").Router();

const { checkRol, checkAuthEmployee, checkAuth} = require('../utils')
const {
  createPurchase,
  employeePurchase,
  findPurchaseList,
  findPurchaseNumber,
  findPurchaseAndUpdate,
  findByIdAndDelete,
} = require("../controllers/purchaseController");

router.post("/", checkAuthEmployee, checkRol, createPurchase);
router.post("/employeePurchase",checkAuthEmployee, employeePurchase)
router.get("/", checkAuthEmployee, checkRol, findPurchaseList);
router.get("/:id", checkAuthEmployee, findPurchaseNumber);
router.put("/:id", checkAuthEmployee, checkRol, findPurchaseAndUpdate);
router.delete("/:id", checkAuthEmployee, checkRol, findByIdAndDelete);
module.exports = router;
