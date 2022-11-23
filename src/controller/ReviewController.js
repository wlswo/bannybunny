const reviewService = require('../services/ReviewService');


exports.createReview = async (req,res) => {
    try{
        const review = await reviewService.createReview(req.body);
        if(review == null) {
            return res.status(404).json({message:"게시글이 없습니다.",status:"fail"});
        }
        res.status(201).json({"data":review, status:"success"});
    }catch(err) {
        res.status(500).json({"error": "잘못된 접근입니다."});
    }
};

exports.updateReview = async (req,res) => {
    const review = await reviewService.updateReview(req.params.id,req.body);
    if(review == null) {
        return res.status(404).json({status:"게시글이 없습니다."});
    }
    res.status(201).json({status:"success"});
}

exports.deleteReview = async (req,res) => {
    try{
        const review = await reviewService.deleteReview(req.params.id);
        res.status(204).json({status:"success"});
    }catch(err) {
        res.status(500).json({"error":err.message});
    }
}
