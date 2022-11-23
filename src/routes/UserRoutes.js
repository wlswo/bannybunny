/** 
 *  localhost:3001/api/users
 */
const express  = require('express');
const router   = express.Router();
const {
  getUserDetail,
  checkUserName, 
} = require('../controller/UserController');

/** 유저 상세 정보 가져오기 */
router.get('/:id', getUserDetail);

/** 유저 별명 중복 검사 */
router.get('/exists/:name',checkUserName);

module.exports = router;