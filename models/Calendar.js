const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Mon: [{
        type: Schema.Types.ObjectId,
    }],
    Tue: [{
        type: Schema.Types.ObjectId,
    }],
    Wed: [{
        type: Schema.Types.ObjectId,
    }],
    Thur: [{
        type: Schema.Types.ObjectId,
    }],
    Fri: [{
        type: Schema.Types.ObjectId,
    }],
    Sat: [{
        type: Schema.Types.ObjectId,
    }],
    Sun: [{
        type: Schema.Types.ObjectId,
    }],
});

const Calendar = mongoose.model('Calendar', CalendarSchema);
module.exports = Calendar;