const express = require('express');
const morgan = require('morgan'); //클라이언트에서 어떤 요청이 왔는지 터미널에 로그가 작성됨
const cookieParser = require('cookie-parser'); //쿠킹 파싱 미들웨어 (res.cookies,req.signedCookies,res.clearCookie)
const session = require('express-session'); //
const dotenv = require('dotenv'); //비밀키,환경변수 등을 설정,관리해줌
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

//use:미들웨어
app.use(morgan('dev')); //dev, combined:조금도 자세함(ip,시간)

//static:정적이미지를 보내줄때, 해당 미들웨어를 사용 (요청경로,static(실제경로))
//정적 이미지는 다음 미들웨어로 넘어가지 않고 여기서 실행종료(대부분의 미들웨어는 next를 실행하지만, 해당 미들웨어는 아님)
//미들웨어 확장: 내 미들웨어 안에 미들웨어 모듈 사용
app.use('/', (req,res,next)=>{
  if(req.session.id){
    express.static(path.join(__dirname, 'public'))
  }
  else{
    next()
  }
}); 

// 해당 2줄이 body-parser를 대체해줌
app.use(express.json()); //클라이언이 json데이터를 보냈을때 파싱해서 req.body에 넣어줌
app.use(express.urlencoded({ extended: false })); //클라이언트 form 데이터를 파싱해줌(extended:쿼리스트링 처리여부, true면 fs모듈 false면 querystring 내장모듈) // 해당 2줄이 body-parser를 대체해줌

//form일때 이미지,동영상,파일 같은경우 urlencoded가 처리못해서 multer로 처리

app.use(cookieParser(process.env.COOKIE_SECRET)); //쿠키 process.env.COOKIE_SECRET으로 서명(암호화)


//req.session 특정 사용자에 대한 세션을 지정해줌
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

//form의 enctype이 multipart/from-data경우 multer 모듈사용(body paser로 파싱안됨)
const multer = require('multer');
const fs = require('fs');

//upload폴더가 있는지 확인 -> 없으면 만듬(서버시작전에 만드는거므로 sync 사용가능)
try {
  fs.readdirSync('uploads');
} catch (error) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}
const upload = multer({
  storage: multer.diskStorage({ //디스크 or 메모리 (아니면 multer s3, multer google storage 사용할 수도 있음)
    destination(req, file, done) {
      done(null, 'uploads/'); //done(에러시, 성공했을때)
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //확장자추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});



app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'multipart.html'));
});

//single 미들웨어 장착 (특정 라우터의 미들웨어는 다음과 같이 작성함)
//image는 form data key
//한개의 이미지만 업로드할 경우 single 미들웨어 사용
//input file이 multiple일 경우 array 미들웨어 사용
//input name이 다를경우 filed({name:"image1"},{name:"image2"})
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('ok');
});

app.get('/', (req, res, next) => {
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) => {
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
