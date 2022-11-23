const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const reviewSchema = new Schema({
    content: String,
    writer: { type:mongoose.Schema.Types.ObjectId , ref: 'User' ,required: true },
    image: String,
    gameid: {type:mongoose.Schema.Types.ObjectId, ref: 'Game', required: true},
    comment_date: {type: Date, default: Date.now()}
},{
    versionKey: false 
});

module.exports = mongoose.model("Review",reviewSchema);