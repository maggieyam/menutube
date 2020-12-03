const express = require("express");
const Tag = require("../../models/Tag");
const Nutrition = require("../../models/Nutrition");
const Ingredients = require("../../models/Ingredient");
const Diet = require("../../models/Diet");
const Ingredient = require("../../models/Ingredient");
const router = express.Router();

// router.get('/test', (req, res) => 
//     res.json({msg: 'This is the tags route'}));


router.get("/", () => {
    const dietaries = Diet.find();
    const ingredients = Ingredient.find();
    const nutrition = Nutrition.find();

    Promise.all([dietaries, ingredients, nutrition])
})

module.exports = router;