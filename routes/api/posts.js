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
    .populate("user", "username")
    .sort({date: -1})
    .then(posts => {
        const normPosts = {};
        posts.forEach(post => normPosts[post._id] = post)
        return res.json(normPosts);
    })  
    .catch(err => res.status(400).json(err));
})

router.get("/user/:user_id", (req, res) => {
  Post.find({ user: req.params.user_id })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json(err));
});

//routes for show page
router.get("/:id", (req, res) => {
    Post
    .findById(req.params.id)
    .populate({path: 'comments', populate: { path: 'user', select: 'username'}})
    .then(post => {res.json(post)})
    .catch(err => res.status(400).json(err))
})

// routes for search
router.get("/search/nutrition", (req, res) => {
  Nutrition.find(req.query)
    .then((nutrition) => {
      res.json(nutrition);
    })
    .catch((err) => res.status(400).json(err));
});

// routes for search
router.get("/search/ingredient", (req, res) => {
  Ingredient.find(req.query) // {Nutrition: {protein: 1}}
    .then((ingredients) => res.json(ingredients))
    .catch((err) => res.status(400).json(err));
});
// routes for search
router.get("/search/diet", (req, res) => {
  Diet.find(req.query) // {Nutrition: {protein: 1}}
    .then((diet) => res.json(diet))
    .catch((err) => res.status(400).json(err));
});

// routes for saved
router.post("/save/:id/", (req, res) => {
  User.findById(req.body.userId)
    .then((user) => {
      if (!user.saved.includes(req.params.id)) {
        user.saved.push(req.params.id);
        user.save();
      }
      return res.json(user);
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/create",
passport.authenticate("jwt", { session: false }),
(req, res) => {
    const { isValid, errors } = validatePostInput(req.body);

    if (!isValid) {
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
    });

    newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
})

router.patch('/edit/:id',
passport.authenticate("jwt", { session: false }),
(req, res) => {
    const { body } = req;
    Post
    .findById(req.params.id)
    .then(post => {
        Object.keys(body).forEach(k => post[k] = body[k]);
        post.save()
        .then((post) => res.json(post))
    })
    .catch(err => res.status(400).json(err))
});

router.delete('/delete', (req, res) => {
    Post
    .deleteMany(res.query)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err))
});

router.delete("/delete/:postId", (req, res) => {
  Post.findByIdAndDelete(req.params.postId, (err) => {
    if (err) {
      console.log(err);
    } else {
      return res.json(req.params.postId);
    }
  });
});

// router.get('/saved/:user_id', (req, res) => {
//     User.findById(req.params.user_id).then(
//         user => {
//         Post.find({_id: {$in: user.saved }})
//             .then(posts => res.json(posts))
//         })
//         .catch(err => res.status(400).json(err))
// })

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
