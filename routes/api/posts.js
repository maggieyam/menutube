const express = require("express");
const router = express.Router();
const passport = require("passport");

const validatePostInput = require("../../validations/posts");
const Post = require("../../models/Post");
const Tag = require("../../models/Tag");

router.get("/", (req, res) => {
    Post
    .find()
    .sort({date: -1})
    .then( post => res.json(post))
    .catch(err => res.status(400).json(err));
})

router.get("/user/:user_id", (req, res) => {
    Post
    .find({ user: req.params.user_id })
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err))
})

router.get("/tag/:tag_id", (req, res) => {
    Post
    .find({ tag: req.params.tag_id })
    .then(posts => res.json(posts))
    .catch(err => res.status.length(400).json(err))
})

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


    debugger
    const newPost = new Post({
        user: req.user.id,
        nutrition: req.body.nutrition,
        ingridients: req.body.ingridients,
        dietaries: req.body.dietaries,
        title: req.body.title,
        url: req.body.url
    })

    newPost.save().then(post => res.json(post));
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
