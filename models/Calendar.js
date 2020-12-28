const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Mon: {
        type: Array,
        default: [undefined, undefined, undefined],
        ref: 'Post',
    },
    Tue: {
        type: Array,
        default: [undefined, undefined, undefined],
        ref: 'Post',
    },
    Wed: {
        type: Array,
        default: [undefined, undefined, undefined],
        ref: 'Post',
    },
    Thur: {
        type: Array,
        default: [undefined, undefined, undefined],
        ref: 'Post',
    },
    Fri: {
        type: Array,
        default: [undefined, undefined, undefined],
        ref: 'post',
    },
    Sat: {
        type: Array,
        default: [undefined, undefined, undefined],
        ref: 'post',
    },
    Sun: {
        type: Array,
        default: [undefined, undefined, undefined],
        ref: 'post',
    },
});

const Calendar = mongoose.model('Calendar', CalendarSchema);
module.exports = Calendar;