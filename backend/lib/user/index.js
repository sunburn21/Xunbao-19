const { User, Question, UserQuestion } = require("../../app/models");
const Joi = require("joi");
const jwtHelper = require("../../app/helper/jwt");
const userHelper = require("../../app/helper/user");
const fbHelper = require("../../app/helper/fb");

const userObjectSchema = Joi.object().keys({
  email: Joi.string()
    .email({ minDomainAtoms: 2 }),
  name: Joi.string().required(),
  ffid: Joi.string().required(),
  image: Joi.string().required(),
  access_token: Joi.string().required()
});

/**
 * createUser - create the user in database
 *
 * @param {Object} userObject the details of the user
 * @param {Function} callback the function envoked with two parameters
 *                            1. error the error while saving in db or missing details
 *                            2. token if the save is successfull the user is signed in
 *
 * @returns {undefined}
 */
async function createUser(userObject, callback) {
  const { error, value } = Joi.validate(userObject, userObjectSchema);
  if (error) {
    callback(error);
  } else {
    try {
      const isTokenValid = await fbHelper.validateToken(
        userObject.access_token,
        userObject.ffid
      );
      if (isTokenValid) {
        const userDetials = await User.findOne({ ffid: userObject.ffid });
        if (userDetials) {
          try {
            const token = await jwtHelper.sign({
              userId: userDetials._id
            });
            callback(null, token);
            User.update(
              { ffid: passwordAndMail.ffid },
              { access_token: passwordAndMail.access_token }
            );
          } catch (errorInSign) {
            callback(errorInSign);
          }
        } else {
          let questions = await Question.find({});
          const newUser = new User(userObject);
          questions = questions.map(
            question =>
              new UserQuestion({
                user_id: newUser._id,
                question_id: question._id,
                attempts: 0,
                is_answered: false,
                hint_used: false,
                points: 0
              })
          );
          await UserQuestion.insertMany(questions);
          await newUser.save();
          const token = await jwtHelper.sign({ userId: newUser._id });
          callback(null, token);
        }
      } else {
        callback("Invalid Facebook Token");
      }
    } catch (errorInSave) {
      callback(errorInSave);
    }
  }
}
const passwordAndMailSchema = Joi.object().keys({
  access_token: Joi.string().required(),
  ffid: Joi.string().required()
});

/**
 * getUserToken - create a signin toke for the user
 *
 * @param {Object} passwordAndMail the password and email
 * @param {Function} callback        the function is envoked with error and token
 *                               1. error the error while creating access_token
 *                               2. token the signin token.
 * @returns {undefined}
 */
async function getUserToken(passwordAndMail, callback) {
  const { error, value } = Joi.validate(passwordAndMail, passwordAndMailSchema);
  if (error) {
    callback(error);
  } else {
    const userDetials = await User.findOne({ ffid: passwordAndMail.ffid });
    if (userDetials) {
      const isMatch = await fbHelper.validateToken(
        passwordAndMail.access_token,
        passwordAndMail.ffid
      );
      if (isMatch) {
        try {
          const token = await jwtHelper.sign({
            userId: userDetials._id
          });
          callback(null, token);
          User.update(
            { ffid: passwordAndMail.ffid },
            { access_token: passwordAndMail.access_token }
          );
        } catch (errorInSign) {
          callback(errorInSign);
        }
      } else {
        callback("Email/Password does not match");
      }
    } else {
      callback("Email/Password does not match");
    }
  }
}

module.exports = { createUser, getUserToken };
