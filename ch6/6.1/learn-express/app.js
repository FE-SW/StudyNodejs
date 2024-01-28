const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);


//미들웨어
app.use((req,res,next)=>{
  console.log('라우트의 공통부분을 미들웨어로 처리함')
  next() //next를 안쓰면 밑에코드가 실행을안함
  // next('route') : 다음 미들웨어가 실행되는게 아니라, 바로 라우터로 넘어감
},(req,res,next)=>{
  try{
    console.log('2번째 미들웨어')
    throw new Error("에러")
  }
  catch(err){
    next(error) // 에러미들웨어로 토스
  }
})


//about 라우터 전용 미들웨어
app.use('/about',(req,res,next)=>{
  console.log('about 라우터 전용 미들웨어')
  next() //next를 안쓰면 밑에코드가 실행을안함
})

app.get('/', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // res.write('<h1>Hello Node!</h1>'); //http식
  // 위에 두줄이 res.send와 동일함 //express식

  // res.send('Hello, Express');
  res.sendFile(path.join(__dirname, '/index.html'));
});

//request parameter -> 되도록이면 맨아래에 써줌(다른 라우터가 실행안될 가능성이 있으므로)
app.get('/category/:name', (req, res) => {
  res.send(`${req.params.name}`)
});

app.get('*', (req, res) => {
  console.log('위에 라우터를 안거치면 여기로 옴')
  //예외처리할떄 많이사용
});

//그담에 에러 처리 미들웨어를 써줌 (순서중요) //  에러미들웨어 경우 next를 무조건 써줘야함
app.use((err,req,res,next)=>{
  console.log(err)
})


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});

