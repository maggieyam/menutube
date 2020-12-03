const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    nutrition: [{
        type: Schema.Types.ObjectId,
        ref: 'nutrition',
    }],
    ingridients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingridients',
    }],
    dietaries: [{
        type: Schema.Types.ObjectId,
        ref: 'Dietary',
    }],
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

// PostSchema.belongsTo('User');

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;