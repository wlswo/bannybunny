const mongoose = require("mongoose");
const findOrCreate   = require('mongoose-findorcreate');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type:String, unique: true, require: true},
  name: {type:String, default: "기본이름"},
  grade: {type:Number, default: 0},
  point: {type:Number, default: 0},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  check: {type:Number,default: 0},
  havegames: [String],
  likegames: [String],
  type: String,
},{
  versionKey: false 
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model("User", userSchema);