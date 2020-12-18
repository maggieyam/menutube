//create a comment
const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const Comment = require("../../models/Comment");
const Post = require("../../models/Post");

router.post("/create", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        let comment = new Comment({
            body: req.body.body,
            user: req.user.id,
        });
        comment.save().then(comment => 
        { comment.populate("user", "username").execPopulate().then(
            comment => {
                Post.findById(req.body.postId)
                .then( post => {
                    post.comments.push(comment.id);
                    post.save().then(() => res.json(comment))
                })
            }) 
        })
    }
)

router.delete("/delete/:id", 
    (req, res) => {
     Comment.deleteOne({_id: req.params.id})
    .then(() => {
        Post.findById(req.query.postId)
        .then(post => {
            const idx = post.comments.indexOf(req.params.id);
            if (idx !== -1) post.comments.splice(idx, 1) 
            post.save().then(() => res.json(post))
        })
    })
    .catch(err => res.status(400).json(err))
    }
)

module.exports = router;