const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const init = {
    type: Boolean,
    default: false
}

const obj = {};

const dietTags = ["vegetarian", "vegan", "paleo", "keto", "kosher", "halal", "gluten-free", 
    "lactose-free", "nut-free", "sugar-free"]

dietTags.forEach(tag => obj[tag] = init)

const dietSchema = new Schema(obj)

const Diet = mongoose.model('Diet', dietSchema);
module.exports = Diet;