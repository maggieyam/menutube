if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_show');
} else {
  module.exports = require('./keys_hide');
}