const mongoose = require("mongoose");

const budgetSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    maxbudget: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
      match: [/^#(?:[0-9a-fA-F]{3}){1,2}$/, "Invalid Color"],
    },
  },
  { collection: "budget" }
);

const budgetModel = mongoose.model("task", budgetSchema);

module.exports = budgetModel;
