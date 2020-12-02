const express = require("express");
const Post = require("../../models/Post");
const Tag = require("../../models/Tags");
const router = express.Router();

router.get('/test', (req, res) => 
    res.json({msg: 'This is the tags route'}));


router.get("/post/:post_id", (req, res) => {
    Tag
    .find( {post: req.params.post_id })
    .then(tags => res.json(tags))
    .catch(err => res.status(400).json(err))
})


router.post("/create", (req, res) => {
    const newTag = new Tag({
        post: req.post.id,
        dietary: req.body.dietary,
        nutrition: req.body.nutrition,
        ingredients: req.body.ingredients
    })

    newTag.save().then(tag => res.json(tag))
})

// router.get("/:id", (req, res) => {
//     Tag
//     .find( {tag: req.params.tag_id})
//     .then(tags)
//     .catch(err => res.status(400).json(err));
// })


module.exports = router;