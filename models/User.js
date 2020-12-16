const mongoose = require ('mongoose');
const Calendar = require('./Calendar');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  saved: [{
    type: Schema.Types.ObjectId,
  }],
  // calendar: {
  //   type: Calendar
  // },
});

module.exports = User = mongoose.model ('User', UserSchema);
