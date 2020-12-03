const { default: validator } = require('validator');
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {};
    data.title = validText(data.title) ? data.title : '';

    if(!Validator.isLength(data.title, { min: 3, max: 40 })) {
        errors.title = 'Title must be between 3 to 40 chars'
    }
    
return {
        errors,
        isValid: Object.keys(errors).length === 0,
    }

}