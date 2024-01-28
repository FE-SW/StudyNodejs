const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});

//서버도 프로그램이기 떄문에, 프로세스에 올려야함 -> 특정포트에 서버가 프로세스로 돌게설정
server.listen(8080);

//서버 시작(on)
//server.listen 의 콜백을 다음과같이 뺀것
server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중입니다!');
});

//서버 에러 로깅
server.on('error', (error) => {
  console.error(error);
});

//http:80
//https:443
