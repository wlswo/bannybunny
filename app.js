const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const blogRouter = require("./src/routes/BlogRoutes");

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
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); /** extended - true : express 안에 내장된 querystring 모듈사용  / false : 더 확장된 qs 모듈 사용*/
app.use(methodOverride('_method'));

/** 기본 경로로 접속시 응답 */
app.set('view engine','ejs');
app.set('views','./views');
app.get('/', (req,res) => {
   res.render('test')
});
app.get('/2', (req,res) => {
   res.render('test2')
});
app.use("/api/blogs", blogRouter);


/** app.listen() 함수를 이용하여 서버를 실행 */
app.listen(port, () => {
   console.log(`Port : ${port}번으로 서버가 실행됩니다.`);
});

module.exports = app;

// 172.16.101.214:3001/
 