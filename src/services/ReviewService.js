const ReviewModel = require("../models/review");
const GameModel = require("../models/Game");
const mongoose = require('mongoose');

exports.createReview = async (_review) => {
    if(await GameModel.findById(mongoose.Types.ObjectId(_review.gameid)) == null) {
        return null;
    }
    const review = await ReviewModel.create(_review);
    return await GameModel.findByIdAndUpdate({ _id: _review.gameid }, 
                                        { $push: { review: review.id  } },);
}

exports.updateReview = async (_id, _review) => {
    return await ReviewModel.findByIdAndUpdate(_id,_review);
}

exports.deleteReview = async (_review) => {
    const review = await ReviewModel.findByIdAndDelete(_review);
    await GameModel.findByIdAndUpdate({_id:mongoose.Types.ObjectId(review.gameid)},
                                      { $pull: 
                                        {review: {_id:mongoose.Types.ObjectId(review._id)}}
                                    });
}
