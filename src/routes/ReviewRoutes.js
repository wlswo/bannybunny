/**
 * localhost:3001/api/review
 * 리뷰 등록, 수정, 삭제
 */

 const express = require('express');
 const router = express.Router();
 const {
   createReview,
   updateReview,
   deleteReview,
 } = require('../controller/ReviewController');
 
 router.route("/").post(createReview)
 
 router.route("/:id").patch(updateReview)
                     .delete(deleteReview);
 
 module.exports = router;