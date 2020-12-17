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
                    post.save().then(res.json(comment))
                })
            }) 
        })
    }
)

router.delete("/delete", 
    (req, res) => {
     Comment.deleteOne({_id: req.body.commentId})
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json(err))       
    }
)

module.exports = router;