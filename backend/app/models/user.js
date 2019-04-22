const mongoose = require("mongoose");
const Question = require("./userQuestion");

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  name:{
    type:String,
    required:true,
  },
  image: {
    type: String,
    defualt: "N-A"
  },
  ffid: {
    type: String
  },
  level: {
    type: Number,
    defualt: 0
  },
  hash: {
    type: String
  },
  salt: {
    type: String
  },
  access_token: {
    type: String
  }
});

module.exports = userSchema;
