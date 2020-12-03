const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DietSchema = new Schema({
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

const Diet = mongoose.model('Diet', DietSchema);
module.exports = Diet;