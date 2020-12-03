const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({  
    chicken: {
        category: 'meat',
        type: Number,
        default: 0,
    },
    beef: {
        category: 'meat',
        type: Number,
        default: 0,
    },
    pork: {
        category: 'meat',
        type: Number,
        default: 0,
    },
    fish: {
        category: 'meat',
        type: Number,
        default: 0,
    },
    tomato: {
        category: 'vegetables',
        type: Number,
        default: 0,
    },
    broccoli: {
        category: 'vegetables',
        type: Number,
        default: 0,
    },
    potato: {
        category: 'vegetables',
        type: Number,
        default: 0,
    },
    cucumber: {
        category: 'vegetables',
        type: Number,
        default: 0,
    },
    milk: {
        category: 'dairies',
        type: Number,
        default: 0,
    }, 
    soyMilk: {
        category: 'dairies',
        type: Number,
        default: 0,
    },
    almondMilk: {
        category: 'dairies',
        type: Number,
        default: 0,
    },
    condenseMilk: {
        category: 'dairies',
        type: Number,
        default: 0,
    },
    evaperatedMilk: {
        category: 'dairies',
        type: Number,
        default: 0,
    },
    cheese: {
        category: 'dairies',
        type: Number,
        default: 0,
    },
})

const Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;