const { hash } = require('bcryptjs');
const mongoose = require('mongoose');
const Post = require('./Post')

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
    },

    dietary:{
        type: Map,
        of: Number
    },

    nutrition: {
        type: Map,
        of: Number
    },
    
    ingredients: {
        type: Map,
        of: String      
    }
});

// PostSchema.belongsTo('User');

const Tag = mongoose.model('tag', TagSchema);

module.exports = Tag;