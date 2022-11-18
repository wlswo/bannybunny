const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

/** 환경변수에서 포트 가져오기 */
var port = process.env.PORT || 3001;

/** 요청을 json 형태로 파싱 , CORS 설정 */
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false})); /** extended - true : express 안에 내장된 querystring 모듈사용  / false : 더 확장된 qs 모듈 사용*/

/** 기본 경로로 접속시 응답 */
 app.get('/', (req,res) => {
    res.send('Hello World');
    console.log(req.body);
 });

 /** app.listen() 함수를 이용하여 서버를 실행 */
 app.listen(port, () => {
    console.log(`Port : ${port}번으로 서버가 실행됩니다.`);
 });

 
 