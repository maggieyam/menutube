const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nutritionchema = new Schema({
    protein: {
        type: Number,
        default: 0,
    },
    sodium: {
        type: Number,
    },
    saturatedFat: {
        type: Number,
        default: 0,
    },
    transFat: {
        type: Number,
        default: 0,
    },
    carbs: {
        type: Number,
        default: 0,
    },
    vitaminC: {
        type: Number,
        default: 0,
    },
    vitaminA: {
        type: Number,
        default: 0,
    },
    vitaminD: {
        type: Number,
        default: 0,
    },
    vitaminB: {
        type: Number,
        default: 0,
    },
    calcium: {
        type: Number,
        default: 0,
    },
    cholestro: {
        type: Number,
        default: 0,
    },
    iron: {
        type: Number,
        default: 0,
    },
    potassium: {
        type: Number,
        default: 0,
    },
    calories: {
        type: Number,
        default: 0,
    },
})

const Nutrition = mongoose.model('Nutrition', nutritionchema);

module.exports = Nutrition;