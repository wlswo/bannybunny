const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const User = require('../src/models/User');
const {verifyToken, makeAccessToken, makeRefreshToken} = require('../utils/jwt');
const{ Strategy , ExtractJwt } = require("passport-jwt");

module.exports = () => {
   passport.use(
      new KakaoStrategy(
         {
            clientID: process.env.KAKAO_CLIENT_ID, 
            clientSecret: process.env.KAKAO_SECRET,
            callbackURL: "http://localhost:3001/auth/kakao/callback", 
         },
         async (accessToken, refreshToken, profile, done) => {
            try {
               const exUser = await User.findOne({
                  where: { email: profile.email, type : 'kakao' },
               });
               if (exUser) {
                  const refreshToken = makeRefreshToken(exUser.email);

                  done(null, exUser); // 로그인 인증 완료
               } else {
                  const newUser = await User.create({
                     email: profile._json.kakao_account.email,
                     type: 'kakao',
                  });
                  done(null, newUser); 
               }
            } catch (error) {
               console.error(error);
               done(error);
            }
         },
      ),
   );
};