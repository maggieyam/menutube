const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DietarySchema = new Schema({
    vegetarian: {
        type: Boolean,
        default: false,
    },
    vegan: {
        type: Boolean,
        default: false,
    },
    kosher: {
        type: Boolean,
        default: false,
    },
    halal: {
        type: Boolean,
        default: false,
    },
    glutenFree: {
        type: Boolean,
        default: false,
    }
})

const Dietary = mongoose.model('Dietary', DietarySchema);
module.exports = Dietary;