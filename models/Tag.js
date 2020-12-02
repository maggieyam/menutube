const { hash } = require('bcryptjs');
const mongoose = require('mongoose');
const Post = require('./Post')
const User = require('./User')

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
    },

    dietary:{
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
    },
    nutrition: {
        protein: {
            type: Number,
            default: 0,
        },
        sodium: {
            type: Number,
        },
        saturatedFat: {
            type: Number,
            default: 0,
        },
        transFat: {
            type: Number,
            default: 0,
        },
        carbs: {
            type: Number,
            default: 0,
        },
        vitaminC: {
            type: Number,
            default: 0,
        },
        vitaminA: {
            type: Number,
            default: 0,
        },
        vitaminD: {
            type: Number,
            default: 0,
        },
        vitaminB: {
            type: Number,
            default: 0,
        },
        calcium: {
            type: Number,
            default: 0,
        },
        cholestro: {
            type: Number,
            default: 0,
        },
        iron: {
            type: Number,
            default: 0,
        },
        potassium: {
            type: Number,
            default: 0,
        },
        calories: {
            type: Number,
            default: 0,
        },
    },
    ingredients: {
        meat: {
            chicken: {
                type: Number,
                default: 0,
            },
            beef: {
                type: Number,
                default: 0,
            },
            pork: {
                type: Number,
                default: 0,
            },
            fish: {
                type: Number,
                default: 0,
            },
        },
        vegetables: {
            tomato: {
                type: Number,
                default: 0,
            },
            broccoli: {
                type: Number,
                default: 0,
            },
            potato: {
                type: Number,
                default: 0,
            },
            cucumber: {
                type: Number,
                default: 0,
            },
        },
        dairies: {
            milk: {
                type: Number,
                default: 0,
            }, 
            soyMilk: {
                type: Number,
                default: 0,
            },
            almondMilk: {
                type: Number,
                default: 0,
            },
            condenseMilk: {
                type: Number,
                default: 0,
            },
            evaperatedMilk: {
                type: Number,
                default: 0,
            },
            cheese: {
                type: Number,
                default: 0,
            },
        } 
    }

});

// PostSchema.belongsTo('User');

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;