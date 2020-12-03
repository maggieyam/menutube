const express = require("express");
const router = express.Router();
const passport = require("passport");

const validatePostInput = require("../../validations/posts");
const Post = require("../../models/Post");
const Nutrition = require("../../models/Nutrition");
const Diet = require("../../models/Diet");
const Ingredient = require("../../models/Ingredient");
const User = require("../../models/User");

router.get("/", (req, res) => {
    Post
    .find()
    .sort({date: -1})
    .then( posts => {
        User.find().then((users) => {
            const postResponse = {};
            const userResponse = {};
            posts.forEach( post => {
                postResponse[post._id] = post;
            });

            users.forEach( user => {
                userResponse[user._id] = user;
            });
            res.json({posts: postResponse, user: userResponse}); 
        })
    })     
    .catch(err => res.status(400).json(err));
    })

router.get("/user/:user_id", (req, res) => {
    Post
    .find({ user: req.params.user_id })
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err))
})

router.get("/:id", (req, res) => {
    Post
    .findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err))
})

// routes for search
router.get("/search/nutrition", (req, res) => { 
    Nutrition   
    .find(req.query) 
    .then(nutrition => {
        res.json(nutrition)
    })
    .catch(err => res.status(400).json(err))
})
// routes for search
router.get("/search/ingredient", (req, res) => { 
    Ingredient
    .find(req.query) // {Nutrition: {protein: 1}}
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(400).json(err))
})
// routes for search
router.get("/search/diet", (req, res) => { 
    Diet
    .find(req.query) // {Nutrition: {protein: 1}}
    .then(diet => res.json(diet))
    .catch(err => res.status(400).json(err))
})

// // routes for saved
// router.get("/save/:id/", (req, res) => { 
//     const user = User.find({ _id: req.params.user_id });
//     user.saved.push(req.params.id);
// })

// routes for 
// router.get("/username/:id", (req, res) => {
//     const post = User.findById()
// })


router.post("/create",
passport.authenticate("jwt", { session: false }),
(req, res) => {
    const { isValid, errors } = validatePostInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

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

router.delete('/delete', (req, res) => {
    Post
    .deleteMany(res.body)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err))

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
