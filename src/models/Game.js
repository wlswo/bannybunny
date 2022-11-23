const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: { type: String, required: true }, 
  writer: { type:mongoose.Schema.Types.ObjectId , ref: 'User' ,required: true },
  content: String,
  genre: [String],
  thumbnail: String,
  price:Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  review: [{type:mongoose.Schema.Types.ObjectId, ref: 'Review'}],
  isDelete: {type: Boolean, default: false},
},{
  versionKey: false 
});
 

module.exports = mongoose.model("Game", GameSchema);