// validating using JOi
const Joi = require('joi');
function validateUser(user) {
    const schema = {
        FirstName: Joi.string().min(3).max(30).required(),
        LastName: Joi.string().min(3).max(30).required(),
        Email: Joi.string().min(5).max(255).required().email(),
        UserName: Joi.string().alphanum().min(3).max(30).required(),
        Password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        ConfirmPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        Gender: Joi.string().min(4).max(6).required(),
        Languages:Joi.string(),
        Contact: Joi.number().required(),
        DOB:Joi.string().required(),
        Address:Joi.object(),
        UserType:Joi.string(),
        UserCode:Joi.string(),
        ProfilePic:Joi.string(),
        CreatedAt:Joi.string(),
        isActive:Joi.string()
    };
  
    return Joi.validate(user, schema);
  }
  module.exports = ('validateUser', validateUser);