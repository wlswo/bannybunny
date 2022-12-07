const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const cors              = require('cors');
const methodOverride    = require('method-override');
const mongoose          = require('mongoose');
const session           = require('express-session');
const passport          = require('passport');
const passportConfig = require('./passport'); //Passport 설정 import

require('dotenv').config();

/** 환경변수에서 포트 가져오기 */
var port = process.env.PORT || 3001;

/** DB 세팅 */
mongoose.connect(process.env.MONGO_DB);
 var db = mongoose.connection;
 db.once('open', function(){
   console.log('DB connected');
 });
  db.on('error', function(err){
  console.log('DB ERROR : ', err);
 });


/** 요청을 json 형태로 파싱 , CORS 설정, ejs 템플릿 엔진 세팅 */
app.use(cors({
  origin:true,
  credentials:true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); /** extended - true : express 안에 내장된 querystring 모듈사용  / false : 더 확장된 qs 모듈 사용*/
app.use(methodOverride('_method'));
app.use(session({secret:process.env.SECRET, resave: false, saveUninitialized:true}));
/** passport 초기화 및 session 연결 */
app.use(passport.initialize())
app.use(passport.session());
passportConfig(); 

/** 기본 경로로 접속시 응답 */
app.set('view engine','ejs');

app.use('/', require('./src/routes/main'));

// 로그인 - 로그인, 로그아웃
app.use('/auth',require('./src/routes/LoginRoutes'));
app.use('/api/logout', require('./src/routes/LogoutRoutes'));

// 사용자 - 사용자 상세정보, 닉네임 중복체크 
app.use('/api/users',require('./src/routes/UserRoutes'));

// 게임 - 게임 리스트, 등록, 수정, 삭제 
app.use('/api/games',require('./src/routes/GameRoutes'));

// 리뷰 - 리뷰 등록, 수정, 삭제 
app.use('/api/review',require('./src/routes/ReviewRoutes'));

/** app.listen() 함수를 이용하여 서버를 실행 */
app.listen(port, () => {
   console.log(`Port : ${port}번으로 서버가 실행됩니다.`);
});

module.exports = app;
 