//passport/index.js
const passport = require('passport');
const kakao = require('./kakaoStrategy');
const User = require('../src/models/User');

module.exports = () => {
    /*
        serializeUser : 
        로그인 시 실행, req.session(세션) 객체에 어떤 데이터를 저장할지 정하는 메서드
        매개변수로 user, 사용자 정보를 받고 done 함수에 user.id를 넘긴다.

        done의 첫 번째 파라미터는 에러 발생 시 사용, 
        두 번째 인수에는 저장하고 싶은 데이터를 넣는다.
        로그인 시 사용자 데이터를 세션에 저장,
    */
    passport.serializeUser((user,done)=> {
        done(null,user.id);
    });
    /*
        deserializeUser :
        매 요청시 실행되는 메서드
        passport.session 미들웨어가 이 메서드를 호출, serializeUser의 done 두번 째 인수로 넣었던 데이터가 deserializeUser의 매개변수
    */
    passport.deserializeUser((id,done)=> {
        User.findOne({where:{id}})
            .then(user =>  done(null,user))
            .catch(err=>done(err));
        
    });

    //로그인 전략
    kakao();
}