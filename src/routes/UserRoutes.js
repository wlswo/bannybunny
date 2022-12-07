/** 
 *  localhost:3001/api/users
 */
const express  = require('express');
const router   = express.Router();
const {
  getUserDetail,
  checkUserName, 
} = require('../controller/UserController');

/** 로그인된 사용자의 정보 */
router.route("/auth").get((req,res)=>{
  if(req.user === undefined) {
    res.send({status:"false"});
  }else{
    res.send({status:"true",user:req.user});
  }
})

/** 유저 상세 정보 가져오기 */
router.get('/:id', getUserDetail);

/** 유저 별명 중복 검사 */
router.get('/exists/:name',checkUserName);

module.exports = router;