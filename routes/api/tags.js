const express = require("express");
const Tag = require("../../models/Tag");
const Nutrition = require("../../models/Nutrition");
const Ingredients = require("../../models/Ingredient");
const Dietary = require("../../models/Dietary");
const Ingredient = require("../../models/Ingredient");
const router = express.Router();

// router.get('/test', (req, res) => 
//     res.json({msg: 'This is the tags route'}));


router.get("/", () => {
    const dietaries = Dietary.find();
    const ingredients = Ingredient.find();
    const nutrition = Nutrition.find();

    Promise.all([dietaries, ingredients, nutrition])
})


// router.get("/post/:post_id", (req, res) => {
//     Tag
//     .find( {post: req.params.post_id })
//     .then(tags => res.json(tags))
//     .catch(err => res.status(400).json(err))
// })


// router.post("/create", (req, res) => {
//     const newTag = new Tag({
//         dietaries: req.body.dietaries, // how to use the nested hash
//         nutrition: req.body.nutrition,
//         ingredients: req.body.ingredients
//     })
//     Promise.all()
//     newTag.save().then(tag => res.json(tag))
// })

// router.get("/:id", (req, res) => {
//     Tag
//     .find( {tag: req.params.tag_id})
//     .then(tags)
//     .catch(err => res.status(400).json(err));
// })


module.exports = router;