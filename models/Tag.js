const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
    nutrition: [{
        type: Schema.Types.String,
        ref: 'nutrition',
    }],
    ingridients: [{
        type: Schema.Types.String,
        ref: 'Ingridients',
    }],
    dietaries: [{
        type: Schema.Types.String,
        ref: 'Diet',
    }],
});


const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;