const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
  },
  products: [
    {
      type: String,
      require: true,
    },
  ],
});

const PurchaseModel = mongoose.model("purchase", purchaseSchema);
module.exports = PurchaseModel;
