const router = require("express").Router();

const {
  createPurchase,
  findPurchaseList,
  findPurchaseNumber,
  findPurchaseAndUpdate,
  findByIdAndDelete,
} = require("../controllers/purchaseController");

router.post("/", createPurchase);
router.get("/", findPurchaseList);
router.get("/:id", findPurchaseNumber);
router.put("/:id", findPurchaseAndUpdate);
router.delete("/:id", findByIdAndDelete);
module.exports = router;
