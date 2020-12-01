const express = require("express");

const router = express.Router();
const passport = require("passport");

const validatePostInput = require("../../validations/posts");
const Post = require("../../models/Post");

router.get("/tests", (req, res) => {
    res.json({msg: "This is posts route"})
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
