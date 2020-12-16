const express = require("express");
const Nutrition = require("../../models/Nutrition");
const Diet = require("../../models/Diet");
const Ingredient = require("../../models/Ingredient");
const router = express.Router();

// router.get('/test', (req, res) => 
//     res.json({msg: 'This is the tags route'}));


router.get("/", (req, res) => {
    const diet = new Diet({});
    const ingredients = new Ingredient({});
    const nutrition = new Nutrition({});

    Promise.all([diet, ingredients, nutrition]).then(tags => res.json(tags) )
})
module.exports = router;