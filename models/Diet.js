const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const init = {
    type: Boolean,
    default: false
}

const obj = {};

const dietTags = [  "gluten-free", "halal", "keto", "kosher", "lactose-free", 
    "nut-free", "paleo", "sugar-free", "vegan", "vegetarian"]

dietTags.forEach(tag => obj[tag] = init)

const dietSchema = new Schema(obj)

const Diet = mongoose.model('Diet', dietSchema);
module.exports = Diet;