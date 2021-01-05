const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const init = {
    type: Number,
    default: 0
}

const obj = {};

const nutritionTags = ["high-protein", "low-sodium", "low-fat", "low-carb", "low-calorie",
    "low-cholesterol", "high-fiber", "vitamin A", "vitamin B", "vitamin C", "vitamin D",
    "low-sugar", "calcium", "iron", "potassium", "magnesium"]

nutritionTags.forEach(tag => obj[tag] = init)

const nutritionSchema = new Schema(obj);

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition;