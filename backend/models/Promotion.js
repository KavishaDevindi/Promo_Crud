const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema({
  promotionType: { type: String, required: true },
  promotionDescription: { type: String, required: true },
  promotionCode: { type: String, required: true },
  distributor: { type: String, required: true },
  distributorEmail: { type: String, required: true }, // New field
  promotionStartDate: { type: Date, required: true },
  promotionEndDate: { type: Date, required: true },
  totalBuyQty: { type: Number, required: true },
  focQty: { type: Number, required: true },
});

const Promotion = mongoose.model("Promotion", promotionSchema);

module.exports = Promotion;
