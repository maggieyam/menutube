const mongoose = require('mongoose');
const User = require('./User')

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now  
    }

});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;