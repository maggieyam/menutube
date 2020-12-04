if (process.env.NODE_ENV === 'production') {
  module.exports = require('./aws_show');
} else {
  module.exports = require('./aws_hide');
}