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

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;