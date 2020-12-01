const express = require("express");

const router = express.Router();
const passport = require("passport");

const validatePostInput = require("../../validations/posts");
const Post = require("../../models/Post");

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

router.get("/user/:id", (req, res) => {
    Post
    .findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err))
})




router.post("/",
passport.authenticate("jwt", { session: false }),
(req, res) => {
    const { isValid, errors } = validatePostInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    // not sure
    const newPost = new Post({
        user: req.user.id,
        title: req.body.title,
        url: req.body.url
    })

    newPost.save().then(post => res.json(post));
})



module.exports = router;
