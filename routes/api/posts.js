const express = require("express");
const router = express.Router();
const passport = require("passport");

const validatePostInput = require("../../validations/posts");
const Post = require("../../models/Post");
const Nutrition = require("../../models/Nutrition");
const Diet = require("../../models/Diet");
const Ingredient = require("../../models/Ingredient");

// order all posts in reverse order
router.get("/", (req, res) => {
    Post
    .find()
    .sort({date: -1})
    .then( post => res.json(post))
    .catch(err => res.status(400).json(err));
})

// route for all posts under current user
router.get("/user/:user_id", (req, res) => {
    Post
    .find({ user: req.params.user_id })
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err))
})

// routes for search
// router.get("/search/:id/", (req, res) => {
//     Post
//     .find({ user: req.params.user_id })
//     .then(posts => res.json(posts))
//     .catch(err => res.status(400).json(err))
// })

// routes for one post
router.get("/:id", (req, res) => {
    Post
    .findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err))
})



router.post("/create",
passport.authenticate("jwt", { session: false }),
(req, res) => {
    const { isValid, errors } = validatePostInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    // create new tags => {nutrition, diet, ingredients}
    let nutrition = new Nutrition(req.body.nutrition) || {};
    let diet = new Diet(req.body.diet) || {};
    let ingredients = new Ingredient(req.body.ingredients) || {};
    nutrition.save();
    diet.save();
    ingredients.save();

    const newPost = new Post({
        user: req.user.id,
        title: req.body.title,
        url: req.body.url,
        nutrition: nutrition,
        ingredients: ingredients,
        diet: diet,
    })

    newPost
    .save()
    .then((post) => res.json(post)).catch((err) => res.status(400).json(err));
})


// router.patch("/update/:post_id", 
// passport.authenticate("jwt"), {session: false}),
// (req, res) => {
//     if(!isValid) {
//         return res.status(400).json(errors);
//     }

//     const post = Post
//                 .findById(req.params.find)
//                 .then(post => res.json(post))
//                 .catch(err => res.status(400).json(err))
// }




module.exports = router;
