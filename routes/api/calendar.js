const express = require("express");
const router = express.Router();
const Calendar = require("../../models/Calendar");

router.get("/user/:user_id", (req, res) => {
    Calendar
    .findOne({ user: req.params.user_id })
    .then(calendar => res.json(calendar))
    .catch(err => res.status(400).json(err));
})

router.post("/:id", (req, res) => {
    const { date, idx, postId } = req.body;
    console.log(req.body)

    Calendar
    .findById(req.params.id)
    .then( 
        calendar => {
            calendar[date][idx] = postId; 
            calendar.markModified(date);        
            calendar.save()
            .then(
                calendar => {res.json(calendar)}
            );       
    })
    .catch(err => res.status(400).json(err));
})

router.patch("/:id", (req, res) => {
    const { date, idx } = req.body;

    Calendar.findById(req.params.id)
    .then(calendar => {
        calendar[date][idx]= undefined;
        calendar.markModified(date);
        calendar.save()
        .then(calendar => res.json(calendar));      
    })
    .catch(err => res.status(400).json(err));
})
module.exports = router;