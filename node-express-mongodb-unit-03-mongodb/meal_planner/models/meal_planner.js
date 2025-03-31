const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const MealSchema = new Mongoose.Schema({
  food: String,
  calories: Number,
});

const schema = {
  date: {
    type: String,
    require: true,
  },
  breakfest: MealSchema,
  lunch: MealSchema,
  dinner: MealSchema,
  snacks: [MealSchema],
};

const Mealplan = new Mongoose.Schema(schema);

module.exports = mongoose.model("mealplan", Mealplan);
