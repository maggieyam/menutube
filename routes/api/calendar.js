const express = require("express");
const router = express.Router();
const Calendar = require("../../models/Calendar");

router.get("/:user_id", (req, res) => {
    Calendar
    .find({ user: req.params.user_id })
    .then(calendar => res.json(calendar))
    .catch(err => res.status(400).json(err));
})

// router.post("/edit/:id", (req, res) => {
//     const index
// })
module.exports = router;