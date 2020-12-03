const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    nutrition: {
        type: Schema.Types.Mixed,
        ref: 'nutrition',
    },
    ingredients: {
        type: Schema.Types.Mixed,
        ref: 'Ingridients',
    },
    diet: {
        type: Schema.Types.Mixed,
        ref: 'Diet',
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
    },
    

});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;