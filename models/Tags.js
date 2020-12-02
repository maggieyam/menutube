const mongoose = require('mongoose');
const Post = require('./Post')

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
    },
    title: {
        type: String,
        required: true,
    },

});

// PostSchema.belongsTo('User');

const Tag = mongoose.model('tag', TagSchema);

module.exports = Tag;