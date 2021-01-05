const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const init = {
    type: Number,
    default: 0
}

const obj = {};

const nutritionTags = ["calcium", "high-fiber", "high-protein", "iron", "low-calorie", "low-carb", 
    "low-cholesterol", "low-fat", "low-sodium", "low-sugar", "magnesium", "potassium", "vitamin A", 
    "vitamin B", "vitamin C", "vitamin D"]

nutritionTags.forEach(tag => obj[tag] = init)

const nutritionSchema = new Schema(obj);

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition;