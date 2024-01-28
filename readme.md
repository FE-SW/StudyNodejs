# 내장모듈
Node.js의 내장 모듈은 Node.js 환경에서 기본적으로 제공되는, 별도의 설치 없이 사용할 수 있는 모듈들이다. 이 모듈들은 파일 시스템 접근(fs), HTTP 서버 구축(http), 경로 처리(path), 운영 체제 정보(os) 등 다양한 기능을 제공하며, 
Node.js의 핵심 기능과 효율적인 서버 사이드 스크립팅을 가능하게 한다. 이 내장 모듈들은 Node.js의 표준 라이브러리의 일부로, 안정적이고 효율적인 서버 사이드 어플리케이션 개발을 위해 필수적인 요소들을 포함하고 있다


## 1.os
Node.js의 os 모듈은 운영 체제 관련 정보를 제공하는 내장 모듈이다. 이 모듈은 시스템의 운영 체제, 메모리, 네트워크 인터페이스 등에 대한 정보를 가져올 수 있도록 다양한 API를 제공한다. 
os 모듈은 파일 시스템과 같이 OS 자원에 직접적으로 접근하지 않고, 시스템 정보를 제공하는 데 중점을 둔다
```javascript
const os = require('os');

console.log("Free memory: ", os.freemem());
console.log("Total memory: ", os.totalmem());
console.log("OS platform: ", os.platform());
console.log("OS release: ", os.release());
```
* os.arch(): 시스템의 아키텍처를 반환 (예: 'x64', 'arm').
* os.cpus(): 시스템의 CPU 정보(코어 수 및 모델 등)를 객체 배열로 반환
* os.freemem(): 시스템의 사용 가능한 메모리(바이트 단위)를 반환
* os.homedir(): 현재 사용자의 홈 디렉토리 경로를 반환
* os.hostname(): 시스템의 호스트 이름을 반환
* os.loadavg(): 1, 5, 15분 평균 로드를 나타내는 배열을 반환
* os.networkInterfaces(): 네트워크 인터페이스에 대한 상세 정보를 담은 객체를 반환
* os.platform(): 운영 체제의 플랫폼을 반환 (예: 'linux', 'darwin', 'win32').
* os.release(): 운영 체제의 버전을 반환
* os.tmpdir(): 운영 체제의 기본 임시 파일 디렉토리를 반환
* os.totalmem(): 시스템의 총 메모리(바이트 단위)를 반환
* os.type(): 운영 체제의 이름을 반환 (예: 'Linux', 'Darwin', 'Windows_NT').
* os.uptime(): 시스템이 마지막으로 부팅된 이후의 시간(초 단위)을 반환
* os.userInfo([options]): 현재 사용자에 대한 기본 정보를 반환


## 2.path
Node.js의 path 모듈은 파일 시스템 경로와 관련된 작업을 처리하는 데 사용되는 내장 모듈이다. 이 모듈은 운영 체제별 경로 형식의 차이를 추상화하여, 다양한 플랫폼에서 일관된 경로 작업을 수행할 수 있게 해준다.
```javascript
const path = require('path');

const filePath = '/tmp/example.txt';
console.log("Directory name: ", path.dirname(filePath));
console.log("Base file name: ", path.basename(filePath));
console.log("Extension name: ", path.extname(filePath));
console.log("Resolve path: ", path.resolve('user', 'local', 'bin'));
console.log("Join path: ", path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
```
* path.join([...paths]): 여러 경로 조각을 하나의 경로로 합침
* path.resolve([...paths]): 절대 경로를 생성
  * resolve는 /를 절대경로로 처리, join은 상대경로로 처리
* path.basename(path[, ext]): 경로의 마지막 부분(파일 이름)을 반환
* path.dirname(path): 경로의 디렉토리 이름을 반환
* path.extname(path): 경로의 확장자를 반환
* path.normalize(path): 경로를 정규화함

### [주요 기능]
* 경로 조작: 파일이나 디렉토리 경로를 생성, 해석, 수정하는 기능을 제공
  * 예를 들어, 경로의 일부를 추출하거나, 여러 경로 조각을 하나의 경로로 합치는 작업 등이 가능
* 경로 정보: 주어진 경로의 디렉토리, 파일 이름, 확장자 등을 분석하고 반환
* 경로 정규화: 비효율적이거나 잘못된 경로를 표준 형태로 변환
* 플랫폼 호환성: Windows와 POSIX 시스템 간의 경로 차이를 추상화

## 3.url
Node.js의 url 모듈은 URL을 쉽게 분석하고 조작하기 위한 기능을 제공하는 내장 모듈이다. 이 모듈은 URL을 구성하는 여러 부분(호스트명, 경로, 쿼리 스트링 등)을 분리하거나, 개별 URL 구성 요소를 조합하여 전체 URL을 생성하는 데 유용하다.
요청 처리, 리디렉션, 링크 생성 등 다양한 네트워크 관련 작업에 사용된다. 또한, URL을 안전하게 구성하고 해석하는 기능은 API 개발, 데이터 파싱, 웹 스크래핑 등에도 중요한 역할을 한다.
```javascript
const url = require('url');

const myUrl = new URL('http://example.com:8000/path/name?query=string#hash');

console.log("Hostname: ", myUrl.hostname);
console.log("Pathname: ", myUrl.pathname);
console.log("Search Params: ", myUrl.searchParams);
console.log("Hash: ", myUrl.hash);

// SearchParams 추가
myUrl.searchParams.append('key', 'value');
console.log("URL with new param: ", myUrl.toString());
```
* url.parse(urlString[, parseQueryString[, slashesDenoteHost]]): URL 문자열을 URL 객체로 파싱
* url.format(urlObject): URL 객체를 URL 문자열로 변환
* url.resolve(from, to): 기준 URL과 상대 URL을 조합하여 최종 URL을 생성
* new URL(url[, base]): WHATWG URL 표준에 따라 URL 객체를 생성

  
### [주요 기능]
* URL 분석: 주어진 URL 문자열을 구성 요소별로 분해하고, 이들 각각의 세부 정보를 객체 형태로 제공
* URL 생성 및 변환: 개별 구성 요소를 결합하여 완전한 URL을 생성하거나, 상대 URL을 절대 URL로 변환
* URL 처리: URL의 각 부분을 읽거나 수정하는 메서드를 제공


### [노드(Node.js) 방식의 URL 처리]
Node.js 방식의 URL 처리는 Node.js의 전통적인 url 모듈을 통해 URL을 파싱하고 생성하는 방식이다. 이 방식은 Node.js가 초기에 제공한 방식으로, URL을 여러 구성 요소로 분해하고, 이러한 각각의 요소들을 객체의 속성으로 반환한다. 
주요 메서드로는 url.parse()와 url.format()이 있으며, 이들은 각각 URL 문자열을 객체로 변환하고, URL 객체를 문자열로 변환하는 데 사용된다.


#### querystring
Node.js의 querystring 모듈은 URL 쿼리 스트링을 파싱하고 문자열로 직렬화하는 기능을 제공하는 내장 모듈이다. 
이 모듈은 URL의 쿼리 부분을 쉽게 다룰 수 있게 해주며, 특히 WHATWG URL 표준이 적용되기 전의 Node.js 애플리케이션에서 널리 사용된다.
```javascript
const querystring = require('querystring');

// 쿼리 스트링 파싱
const parsed = querystring.parse('name=John&age=30');
console.log(parsed); // { name: 'John', age: '30' }

// 쿼리 스트링 직렬화
const stringified = querystring.stringify({ name: 'Jane', age: 25 });
console.log(stringified); // 'name=Jane&age=25'
```
* querystring.parse(queryString[, sep[, eq[, options]]]): 쿼리 스트링을 파싱하여 객체로 반환
  * sep와 eq는 각각 쿼리 스트링의 구분자(기본값 '&')와 키-값 쌍의 구분자(기본값 '=')를 지정
* querystring.stringify(obj[, sep[, eq[, options]]]): 객체를 쿼리 스트링 형태로 직렬화
* querystring.escape(str): 쿼리 스트링의 특수 문자를 이스케이프 처리
* querystring.unescape(str): 이스케이프 처리된 문자열을 원래 형태로 되돌림



### [WHATWG 방식의 URL 처리]
WHATWG(WEB Hypertext Application Technology Working Group) 방식은 웹 표준을 따르는 새로운 URL 처리 방식이다. 이 방식은 브라우저에서 사용되는 방식과 호환되며, URL 클래스를 통해 구현된다. 
new URL() 생성자를 사용하여 URL 객체를 만들고, URL을 더 유연하게 처리할 수 있다. WHATWG 방식은 검색 매개변수(SearchParams)를 포함하여 더 많은 기능을 제공한다.

#### searchParams
WHATWG URL 표준에 따른 searchParams는 URL의 쿼리 스트링을 쉽게 조작할 수 있게 해주는 인터페이스입니다. 
URL 객체의 searchParams 속성을 통해 접근할 수 있으며, 쿼리 스트링의 각 매개변수를 파싱하고, 추가, 삭제, 수정하는 작업을 단순화합니다.
```javascript
const url = new URL('http://example.com?name=John&age=30');

// 쿼리 매개변수 추가
url.searchParams.append('job', 'developer');

// 쿼리 매개변수 읽기
console.log(url.searchParams.get('name')); // John

// 쿼리 매개변수 수정
url.searchParams.set('age', 31);

// 쿼리 매개변수 삭제
url.searchParams.delete('job');

// URL 문자열로 출력
console.log(url.toString()); // http://example.com?name=John&age=31
```

* ppend(name, value): 새로운 매개변수를 추가
* delete(name): 지정된 매개변수를 삭제
* get(name): 지정된 매개변수의 첫 번째 값 반환
* getAll(name): 지정된 매개변수의 모든 값을 배열로 반환
* has(name): 지정된 매개변수가 있는지 여부를 확인
* set(name, value): 지정된 매개변수의 값을 설정
  * 매개변수가 이미 있으면 모든 기존 값을 제거하고 새 값을 설정
* sort(): 매개변수를 이름의 알파벳 순서로 정렬


## 4.crypto
Node.js의 crypto 모듈은 암호화 기능을 제공하는 내장 모듈이다. 이 모듈은 데이터의 암호화 및 복호화, 해시 생성, 디지털 서명 생성 및 검증 등 다양한 암호화 관련 작업을 수행할 수 있게 해준다. 
crypto 모듈은 보안이 중요한 애플리케이션에서 데이터 보호와 인증에 필수적인 기능을 제공한다.

```javascript
const crypto = require('crypto');

// 해시 생성
const hash = crypto.createHash('sha256').update('Hello World').digest('hex');
console.log(hash); // 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e'

// 랜덤 바이트 생성
const randomBytes = crypto.randomBytes(16).toString('hex');
console.log(randomBytes); // 예: 'e313b8a3c2fb44cf8b8d...'
```
* crypto.createHash(algorithm): 지정된 알고리즘(예: 'sha256', 'md5')을 사용하여 해시 객체를 생성
* crypto.createCipheriv(algorithm, key, iv): 지정된 알고리즘, 키, 초기화 벡터(IV)를 사용하여 암호화 객체를 생성
* crypto.createDecipheriv(algorithm, key, iv): createCipheriv로 암호화된 데이터를 복호화하는 객체를 생성
* crypto.randomBytes(size[, callback]): 지정된 크기의 랜덤 바이트를 생성(콜백을 제공하면 비동기적으로 실행)
* crypto.createSign(algorithm): 지정된 알고리즘을 사용하여 데이터에 대한 디지털 서명을 생성
* crypto.createVerify(algorithm): createSign으로 생성된 디지털 서명을 검증


## 5.util
Node.js의 util 모듈은 주로 유틸리티 함수를 제공하는 내장 모듈이다. 이 모듈은 Node.js 개발에서 흔히 발생하는 다양한 작업을 보다 편리하게 수행할 수 있도록 돕는 일련의 헬퍼 함수들을 포함하고 있다. 
util 모듈은 주로 디버깅, 객체 검사, 상속 구조 설정 등에 사용된다.

```javascript
const util = require('util');

// 콜백 기반 함수를 프로미스 기반으로 변환
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(1000).then(() => console.log('1 second passed'));

// 객체 검사
console.log(util.inspect({ foo: 'bar' }, { showHidden: false, depth: null }));
```
* util.promisify(original): 콜백 기반의 함수를 Promise를 반환하는 함수로 변환
* util.inspect(object[, options]): 객체를 문자열로 변환하여 출력할 때 사용되며, 객체의 구조를 보기 쉽게 표현
* util.inherits(constructor, superConstructor): 한 객체의 프로토타입 체인을 다른 객체의 프로토타입 체인에 연결하여 상속을 구현
* util.format(format[, ...args]): 주어진 문자열과 인수를 사용하여 형식화된 문자열을 생성
* util.debuglog(section): 디버그 목적으로 사용되며, NODE_DEBUG 환경 변수가 설정된 섹션에 대한 로깅 함수를 생성


## 6.worker_threads
Node.js의 worker_threads 모듈은 멀티스레딩 기능을 제공하는 내장 모듈이다. 이 모듈을 사용하면 Node.js의 기본적인 싱글 스레드 모델을 넘어서, 백그라운드 스레드에서 병렬 작업을 실행할 수 있다. 
worker_threads 모듈은 CPU 집약적인 작업을 분산 처리하거나, 메인 스레드의 블로킹을 방지하는 데 유용하다.

```javascript
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    // 메인 스레드에서 워커 생성
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('Received from worker:', message));
    worker.postMessage('Hello, worker!');
} else {
    // 워커 스레드에서 실행되는 코드
    parentPort.on('message', message => {
        console.log('Received from main thread:', message);
        parentPort.postMessage(message.toUpperCase());
    });
}
```
* Worker: 새로운 워커 스레드를 생성하고 관리하는 클래스
* isMainThread: 현재 코드가 메인 스레드에서 실행되고 있는지 여부를 나타내는 플래그
* parentPort: 워커 스레드에서 메인 스레드와의 통신에 사용되는 포트
* workerData: 워커 생성 시 메인 스레드에서 워커 스레드로 전달되는 데이터
* MessageChannel, MessagePort: 워커 간의 통신을 위한 채널과 포트


## 7.fs
Node.js의 fs (File System) 모듈은 파일 시스템에 접근하고, 파일을 조작하기 위한 기능을 제공하는 내장 모듈이다. 이 모듈은 파일을 읽고 쓰기, 파일 정보 가져오기, 파일 삭제 및 이름 변경, 디렉토리 작업 등 다양한 파일 시스템 관련 작업을 할 수 있게 해준다. fs 모듈은 동기 및 비동기 버전의 메서드를 모두 제공한다. 파일 시스템과 상호 작용하는 데 필수적이며, 로컬 파일을 읽고 쓰는 작업, 파일 관리, 디렉토리 탐색 등에 광범위하게 사용됩니다. 비동기 메서드는 I/O 블로킹을 방지하고, 동기 메서드는 간단한 스크립트나 순차적인 실행이 필요할 때 유용하다

```javascript
const fs = require('fs');

// 파일 비동기적으로 읽기
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// 파일 동기적으로 쓰기
fs.writeFileSync('example.txt', 'Hello, Node.js!');
```
* fs.readFile(path[, options], callback): 비동기적으로 파일을 읽음(콜백에는 에러와 파일 데이터가 전달)
* fs.readFileSync(path[, options]): 동기적으로 파일을 읽음(파일 데이터를 반환)
* fs.writeFile(path, data[, options], callback): 비동기적으로 파일에 데이터를 씀(성공 여부는 콜백으로 전달)
* fs.writeFileSync(path, data[, options]): 동기적으로 파일에 데이터를 씀
* fs.unlink(path, callback): 비동기적으로 파일을 삭제
* fs.unlinkSync(path): 동기적으로 파일을 삭제
* fs.mkdir(path[, options], callback): 비동기적으로 새 디렉토리를 생성
* fs.mkdirSync(path[, options]): 동기적으로 새 디렉토리를 생성
* fs.readdir(path[, options], callback): 비동기적으로 디렉토리의 파일 목록을 읽음
* fs.readdirSync(path[, options]): 동기적으로 디렉토리의 파일 목록을 읽음


## 8.Buffer
Node.js의 Buffer 객체는 바이너리 데이터를 처리하기 위한 방법을 제공한다. JavaScript는 문자열을 유니코드로 처리하는데, 이 때문에 바이너리 데이터를 직접 다루는 데는 적합하지 않는다. Buffer 객체는 바이너리 데이터를 저장하고, 이를 읽고 쓰는 데 사용되는 바이트 배열과 유사한 구조를 제공한다.

```javascript
// Buffer 생성
const buf = Buffer.from('Hello World', 'utf8');

// Buffer 내용 출력
console.log(buf.toString()); // 'Hello World'
console.log(buf.toString('hex')); // 16진수 형태로 출력
```


### [주요 기능]
* 생성: Buffer.from(), Buffer.alloc(), Buffer.allocUnsafe() 등을 사용해 생성
* 데이터 처리: 문자열, JSON, 다른 버퍼, 바이트 배열 등 다양한 형태의 데이터를 Buffer 객체로 변환하거나 그 반대로 처리
* 접근 및 수정: 버퍼의 특정 위치에 접근하거나 데이터를 수정
 

### 버퍼(Buffer)와 스트리밍(Streaming)
버퍼(Buffer)와 스트리밍(Streaming)은 데이터를 처리하고 전송하는 두 가지 기본적인 방식이다. 이들은 컴퓨터 네트워킹, 파일 입출력, 멀티미디어 처리 등 다양한 컴퓨팅 작업에서 중요한 역할을 한다.

#### 버퍼(Buffer)
```javascript
const fs = require('fs');

// 파일을 버퍼로 읽기
fs.readFile('example.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```
* 정의: 버퍼는 데이터를 일시적으로 저장하는 메모리 영역
* 작동 방식: 데이터는 일정한 크기의 버퍼에 저장되며, 버퍼가 가득 차면 데이터가 전송되거나 처리
* 목적: 버퍼링은 데이터 처리의 효율성을 높이고, 입출력 작업 간의 속도 차이를 조절하는 데 사용됨. 예를 들어, 네트워크를 통한 데이터 전송에서 버퍼링은 데이터 전송률의 변동을 관리하는 데 유용합니다.

#### 스트리밍(Streaming)
```javascript
const fs = require('fs');
const stream = fs.createReadStream('example.txt');

// 파일 스트림을 통해 데이터 읽기
stream.on('data', (chunk) => {
  console.log(chunk.toString());
});

stream.on('end', () => {
  console.log('End of file read');
});
```
* 정의: 스트리밍은 데이터를 연속적인 흐름으로 처리하고 전송하는 방식
* 작동 방식: 데이터는 작은 단위(청크 또는 스트림)로 나누어져 순차적으로 처리되며, 전체 데이터가 한 번에 전송되거나 로드될 필요가 없음
* 목적: 스트리밍은 대용량 데이터를 실시간으로 처리하고 전송하는 데 적합(예를 들어, 비디오 스트리밍 서비스에서는 전체 파일을 다운로드하지 않고도 비디오를 볼 수 있음)

#### 차이점
* 버퍼: 데이터가 일정한 크기의 버퍼에 축적되기를 기다린 후에 한꺼번에 처리
* 스트리밍: 데이터가 연속적인 흐름으로, 일정한 크기의 청크로 나누어져 바로 처리되고 전송

버퍼링은 전체 데이터를 메모리에 로드한 후 처리하는 반면, 스트리밍은 데이터를 조각(청크)으로 나누어 처리한다. 스트리밍은 대용량 데이터나 실시간 데이터 처리에 더 적합하며, 메모리 사용을 최적화할 수 있다.


## 9.EventEmitter
Node.js의 이벤트 객체는 주로 EventEmitter 클래스를 통해 구현된다. EventEmitter는 이벤트를 발생시키고 이벤트 발생 시 실행할 콜백 함수(이벤트 리스너)를 등록하는 기능을 제공한다. 이를 통해, Node.js에서 비동기 이벤트 기반 프로그래밍을 구현할 수 있다.

```javascript
const EventEmitter = require('events');

// EventEmitter 인스턴스 생성
const myEmitter = new EventEmitter();

// 이벤트 리스너 등록
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// 이벤트 발생시키기
myEmitter.emit('event');
```
* on(이벤트명, 콜백): 지정된 이벤트에 대한 리스너(콜백 함수)를 추가한다. 이벤트 발생 시 해당 콜백이 실행된다.
* addListener(이벤트명, 콜백): on과 기능적으로 동일하며, 이벤트에 콜백 함수를 추가한다.
* emit(이벤트명, [...args]): 지정된 이벤트를 발생시키고, 해당 이벤트에 연결된 모든 리스너를 호출헌다.
* once(이벤트명, 콜백): 이벤트를 한 번만 처리하고 자동으로 리스너를 제거한다. 이벤트가 한 번 발생하면 콜백은 다시 호출되지 않는다.
* removeAllListeners(이벤트명): 지정된 이벤트에 연결된 모든 리스너를 제거한다.
* removeListener(이벤트명, 리스너): 특정 이벤트에서 특정 리스너를 제거한다.
* off(이벤트명, 콜백): removeListener와 기능이 같으며, 특정 이벤트의 특정 리스너를 제거한다.
* listenerCount(이벤트명): 지정된 이벤트에 연결된 리스너의 수를 반환한다.


# httpServer
Node.js에서 HTTP 서버는 http 모듈을 사용하여 생성하고 관리된다. 이 서버는 웹 요청을 수신하고 응답을 전송하는 기능을 제공하며, 기본적인 웹 서버 구축에 필요한 모든 기능을 갖추고 있다. Node.js의 비동기 이벤트 구동 방식은 효율적인 네트워크 통신을 가능하게 하며, 개발자는 createServer 메서드를 통해 쉽게 HTTP 서버를 구성하고 요청 처리 로직을 구현할 수 있다.

```javascript
const http = require('http');
const fs = require('fs');
const port = 3000

const server = http.createServer((req, res) => {
  // HTML 파일 읽기
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500); // 내부 서버 오류
      res.end('Server error');
      console.error(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data); // HTML 파일 쓰기
      res.end();
    }
  });
});

// 서버에 대한 'error' 이벤트 리스너
server.on('error', (err) => {
  console.error('Server error:', err);
});

// 서버에 대한 'listening' 이벤트 리스너
server.on('listening', () => {
  console.log(`Server is running on port ${port}`);
});

// 서버 시작
server.listen(port);
```
**1.http.createServer([requestListener]):**
* HTTP 서버를 생성
* 선택적인 requestListener 함수는 모든 요청에 대해 실행됨.(이 함수는 request와 response 객체를 매개변수로 받음)
* 이 메서드는 생성된 서버 객체를 반환

**2.서버 객체의 listen(port[, host[, backlog]][, callback]) 메서드:**
* 서버가 주어진 포트와 호스트에서 연결을 수신하도록 지시
* callback은 서버가 시작할 때 호출
* backlog는 연결 대기열의 최대 크기를 지정

**3.서버 객체의 on(eventName, callback) 메서드:**
* 서버의 다양한 이벤트(예: 'error', 'listening', 'request')에 리스너를 등록
* 각 이벤트에 따라 적절한 callback 함수가 호출

**4.request 객체:**
* 클라이언트 요청에 대한 정보를 담고 있음
* URL, HTTP 메서드, 헤더, 쿼리 문자열 등 요청과 관련된 데이터를 포함

**5.response 객체:**
* 서버의 HTTP 응답을 구성하고 클라이언트에게 전송하는 데 사용됨
* writeHead(), write(), end() 메서드를 통해 응답 상태 코드, 헤더, 본문을 설정하고 전송할 수 있음


## 1.cookie
쿠키는 클라이언트(브라우저)에 작은 데이터 조각을 저장하여, 사용자의 상태 정보를 관리하는데 사용된다.
```javascript
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  // 쿠키 설정
  res.setHeader('Set-Cookie', 'mycookie=test');

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello, this is a server with cookies!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

```
이 코드에서 서버는 Set-Cookie 헤더를 사용하여 클라이언트에 mycookie라는 이름의 쿠키를 저장한다. 클라이언트는 이후의 요청에서 이 쿠키를 서버에 전송하여 사용자를 식별할 수 있다.


## 2.session
세션은 서버 측에서 사용자 정보를 저장한다. Node.js에서는 express-session 미들웨어를 사용하여 세션을 관리하는 것이 일반적이다
```javascript
const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(session({
  secret: 'my_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.write(`<p>Views: ${req.session.views}</p>`);
    res.end();
  } else {
    req.session.views = 1;
    res.end('Welcome to this page for the first time!');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```
secret은 세션을 암호화하는데 사용되는 키이다. req.session 객체를 사용하여 세션 데이터에 접근하고 수정한다. 이 예제에서는 사용자가 페이지를 방문한 횟수를 세션에 저장한다.
쿠키와 세션은 모두 사용자 식별과 상태 관리에 유용하지만, 쿠키는 클라이언트 측에 데이터를 저장하고, 세션은 서버 측에 데이터를 저장한다는 주요 차이점이 있다.


## Express.js
Express.js는 Node.js를 위한 가장 인기 있는 웹 프레임워크 중 하나로, 웹 애플리케이션과 API 개발을 위한 강력하고 유연한 기능을 제공한다. Express는 Node.js의 기본 http 모듈의 기능을 확장하여 라우팅, 미들웨어 지원, 템플릿 엔진 통합 등의 추가 기능을 제공하며, 웹 서버 개발을 더 간편하고 효율적으로 만들어 준다. Express를 사용하면 복잡한 서버 로직을 쉽게 구성하고 관리할 수 있으며, RESTful API, 웹사이트, 서버 사이드 어플리케이션 등 다양한 유형의 웹 기반 프로젝트를 구축할 수 있다.
```javascript
const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static('public'));

// 라우팅 예시
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 미들웨어 사용
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### 주요 기능
**1.익스프레스 어플리케이션 객체 (Express Application Object):**
* express()를 호출하여 생성되는 주요 객체
* 여러 설정, 라우트, 미들웨어를 관리

**2.라우터 객체 (Router):**
```javascript
// users.js
const express = require('express');
const router = express.Router();

// GET 요청 처리
router.get('/', (req, res) => {
  res.send('Users list');
});

// 특정 사용자에 대한 GET 요청 처리
router.get('/:id', (req, res) => {
  res.send(`User with ID ${req.params.id}`);
});

module.exports = router;
```
```javascript
// app.js
const express = require('express');
const app = express();
const usersRouter = require('./users');

const port = 3000;

// '/users' 경로에 usersRouter를 사용
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```
* express.Router()를 통해 생성
* 라우트를 모듈화하여 관리할 수 있게 해주며, 각 라우트 그룹에 대해 미들웨어와 HTTP 메서드 라우팅을 설정

**3.Request 객체:**
* 클라이언트의 HTTP 요청에 대한 정보를 포함
* req.params, req.body, req.query 등을 통해 요청 데이터에 접근

**4.Response 객체:**
* 클라이언트에게 HTTP 응답을 보내는 데 사용
* res.send(), res.json(), res.render() 등의 메서드로 응답을 커스터마이즈 가능

**5.템플릿 엔진 통합:**
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Pug 템플릿 엔진 설정
app.set('view engine', 'pug');
app.set('views', './views'); // 'views' 디렉토리에 템플릿 파일들을 위치시킵니다.

// 라우트 설정
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```
```javascript
// views/index.pug
doctype html
html
  head
    title= title
  body
    h1= message
```
* app.set('view engine', 'pug')와 같이 설정하여 사용 가능
* 서버 사이드에서 HTML을 동적으로 렌더링

**6.에러 핸들링 미들웨어:**
```javascript
const express = require('express');
const app = express();
const port = 3000;

// 간단한 라우트 설정
app.get('/', (req, res) => {
  throw new Error('Something went wrong!'); // 에러 발생
});

// 다른 미들웨어
// ...

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack); // 서버 로그에 에러 출력
  res.status(500).send('Something broke!'); // 클라이언트에게 에러 응답
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```
Express.js에서 에러 핸들링 미들웨어는 요청 처리 중 발생한 에러를 적절히 처리하고 사용자에게 알려주는 역할을 한다. 이 미들웨어는 다른 모든 미들웨어와 라우트 핸들러 뒤에 위치시켜야 한다. 에러 핸들링 미들웨어는 네 개의 인자를 받는 함수로 구성되며, 이들은 각각 에러 객체, 요청 객체, 응답 객체, 그리고 다음 미들웨어로 넘어가는 함수이다.

* 요청 처리 중 발생한 에러를 처리하기 위해 사용
* 일반적으로 다른 미들웨어 뒤에 위치시킴


# 미들웨어
Express.js에서 미들웨어는 요청과 응답 사이에서 중요한 역할을 하는 함수로, 요청이 들어오고 응답을 보내기 전에 실행되는 일련의 과정을 정의한다. 미들웨어는 app.use()를 통해 익스프레스 애플리케이션에 추가되며, 각 미들웨어는 순차적으로 실행된다.

### 기본 구조
미들웨어 함수는 세 개의 매개변수를 받는다: req (요청 객체), res (응답 객체), next (다음 미들웨어로 넘어가는 함수). req와 res 객체를 통해 요청과 응답을 조작할 수 있으며, next() 함수를 호출하여 다음 미들웨어로 처리를 넘길 수 있다.
```javascript
// 간단한 라우트 설정
app.get('/', (req, res) => {
  throw new Error('Something went wrong!'); // 에러 발생
});

// 다른 미들웨어
// ...

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack); // 서버 로그에 에러 출력
  res.status(500).send('Something broke!'); // 클라이언트에게 에러 응답
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### 미들웨어의 next 함수와 에러 처리
미들웨어 내에서 next 함수에 인자를 넣어 호출하면, Express는 이것을 에러로 간주하고 에러 처리 미들웨어로 직접 이동한다. 에러 처리 미들웨어는 네 개의 매개변수를 가지며, 첫 번째 매개변수는 에러 객체이다.
```javascript
const express = require('express');
const app = express();

// 일반 미들웨어
app.use((req, res, next) => {
  // 에러 발생
  const err = new Error('Something went wrong!');
  next(err); // 에러 처리 미들웨어로 에러 전달
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err); // 에러 로깅
  res.status(500).send('Internal Server Error');
});

app.listen(3000);
```

### 미들웨어간 데이터 전달
Express.js에서 미들웨어 간 데이터를 전달하는 일반적인 방법은 req (요청 객체)나 res (응답 객체)에 값을 추가하는 것이다. 이 방식을 사용하면, 한 미들웨어에서 설정한 데이터를 다음 미들웨어에서 사용할 수 있다. 이는 요청의 생명주기 동안에만 유효하며, 각 요청이 독립적으로 처리된다.
```javascript
const express = require('express');
const app = express();

// 첫 번째 미들웨어에서 데이터 설정
app.use((req, res, next) => {
  req.customData = { user: 'John Doe' };
  next();
});

// 두 번째 미들웨어에서 데이터 사용
app.use((req, res, next) => {
  console.log(req.customData); // { user: 'John Doe' }
  next();
});

app.get('/', (req, res) => {
  res.send(`Hello, ${req.customData.user}!`);
});

app.listen(3000);
```

#### app.set과의 차이점
app.set 메서드는 애플리케이션 전역에서 사용할 수 있는 설정을 저장하는 데 사용된다. app.set으로 설정된 값은 애플리케이션의 모든 요청에 걸쳐 유지된다. 반면, req 또는 res 객체에 값을 추가하는 방식은 해당 요청이 처리되는 동안에만 유효하며, 다른 요청과는 독립적이다

### 미들웨어 확장
Express.js에서 미들웨어 내부에 다른 미들웨어를 넣는 것은, 특정한 조건이나 로직에 따라 다른 미들웨어를 실행하고자 할 때 유용하다. 이 방법을 사용하면, 애플리케이션의 흐름을 더 세밀하게 제어할 수 있다.
```javascript
const express = require('express');
const app = express();

// 사용자 인증 확인을 위한 미들웨어
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // 인증된 사용자일 경우 다음 미들웨어로 진행
  }
  res.redirect('/login'); // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
}

// 로그인 상태에 따른 메시지 출력을 위한 미들웨어
function logRequest(req, res, next) {
  console.log('User is authenticated:', req.isAuthenticated());
  next();
}

app.use((req, res, next) => {
  // req.isAuthenticated라는 함수를 가정 (실제 구현 필요)
  req.isAuthenticated = () => true; // 여기서는 항상 인증된 것으로 가정

  // 미들웨어 확장: isAuthenticated 미들웨어 사용
  isAuthenticated(req, res, () => {
    // logRequest 미들웨어 사용
    logRequest(req, res, next);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```

## 자주쓰는 미들웨어

### 1.Morgan (HTTP 요청 로거)
Morgan은 HTTP 요청을 로깅하는 미들웨어로, 서버에 들어오는 요청의 세부 정보를 기록하는 데 사용됨
```javascript
const express = require('express');
const morgan = require('morgan');

const app = express();

// Morgan 미들웨어 사용
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```
이 코드에서 morgan('dev')는 개발 환경에 적합한 형식으로 요청 로그를 콘솔에 출력한다.


#### [로깅 포맷]
Morgan에서 제공하는 다양한 사전 정의된 로깅 포맷 옵션을 사용하여 로그의 자세한 정도를 선택할 수 있다.

* dev: 개발 중에 유용한 색상화된 응답 시간을 포함한 간결한 출력
* tiny: 최소한의 정보만을 포함한 매우 간단한 출력
* short: 요청자의 IP와 응답 시간을 포함한 간결한 출력
* common: 표준 Apache common 로그 포맷
* combined: 표준 Apache combined 로그 포맷으로, referrer 및 user-agent 정보를 포함

### 2.Cookie-Parser
cookie-parser는 요청에 동봉된 쿠키를 파싱하여 req.cookies 객체로 만드는 데 사용됨
res.cookie() 함수를 사용하여 쿠키를 설정하며, 여러 쿠키 옵션을 지정할 수 있습니다.

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  // 쿠키 설정
  res.cookie('example', 'cookie value', {
    maxAge: 1000 * 60 * 15, // 15분
    httpOnly: true, // 클라이언트 측 JavaScript에서 접근 불가
    secure: true, // HTTPS를 통해서만 쿠키 전송
    sameSite: 'lax' // CSRF 보호
  });

  res.send('Cookie has been set');
});

app.get('/', (req, res) => {
  console.log('Cookies: ', req.cookies);
  res.send('Check the console for cookies');
});

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('example');
  res.send('Cookie has been cleared');
});

app.listen(3000);
```

#### [쿠키 옵션]
Express.js에서 res.cookie()를 사용하여 쿠키를 설정할 때 사용할 수 있는 다양한 옵션들

* maxAge: 쿠키의 만료 시간을 밀리초 단위로 설정한다. 예: 1000 * 60 * 15는 쿠키가 15분 후에 만료됨을 의미한다.
* expires: 쿠키의 만료 날짜를 구체적인 날짜로 설정한다. 예: new Date(Date.now() + 900000)는 현재 시간으로부터 15분 후로 만료 시간을 지정한다.
* httpOnly: true로 설정하면 쿠키가 HTTP(S)를 통해서만 접근 가능해지며, 클라이언트 측 JavaScript를 통한 접근이 금지된다.
* secure: true로 설정하면 쿠키가 HTTPS 연결을 통해서만 전송된다. 일반 HTTP 연결에서는 쿠키가 전송되지 않는다.
* sameSite: CSRF 공격을 방지하는 데 도움을 준다. strict, lax, none 중에서 선택할 수 있으며, strict는 쿠키가 같은 사이트의 요청에만 전송되도록 한다.
* domain: 쿠키가 전송될 도메인을 지정한다. 지정하지 않으면 현재 도메인에만 쿠키가 제한된다.
* path: 쿠키가 전송될 경로를 지정한다. 기본값은 '/'이며, 모든 경로에 대해 쿠키가 유효하다.


### 3.Express-Session
express-session은 세션 관리를 위한 미들웨어로, 사용자별로 고유한 세션을 생성하고 유지시킴
```javascript
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'my_secret',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome to this page for the first time!');
  }
});

app.listen(3000);
```

#### [Express-Session 옵션]
* secret: 세션을 암호화하기 위한 비밀키. 보안을 위해 반드시 제공되어야 한다.
* resave: 요청이 왔을 때 세션에 변경 사항이 없어도 세션을 다시 저장할지 여부를 결정한다.*일반적으로 false로 설정한다.(
* saveUninitialized: 세션에 아직 저장할 내용이 없을 때에도 세션을 저장할지 여부를 결정한다.(GDPR과 같은 개인정보 보호 법규를 준수하기 위해 false로 설정할 수 있다.)
* cookie: 세션 쿠키 설정을 위한 객체. maxAge, secure, httpOnly 등의 쿠키 옵션을 설정할 수 있다.
* store: 세션 데이터를 저장할 저장소를 지정한다. 기본적으로 메모리에 저장하지만, 실제 프로덕션 환경에서는 Redis나 MongoDB 등의 저장소를 사용한다.

### 4.Body-Parser
body-parser 미들웨어는 요청 본문을 파싱하여 req.body 객체로 만듭니다. 주로 JSON 데이터나 URL 인코딩된 데이터를 처리하는 데 사용됨
```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // JSON 데이터 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('User data received');
});

app.listen(3000);
```

### 5.Cors
cors 미들웨어는 Cross-Origin Resource Sharing(CORS) 설정을 제어합니다. 다른 도메인에서 오는 요청을 안전하게 처리할 수 있게 해줌
```javascript
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // 모든 도메인의 요청 허용

app.get('/data', (req, res) => {
  res.json({ message: 'This is CORS-enabled for all origins!' });
});

app.listen(3000);
```

### 6.Helmet
helmet 미들웨어는 여러 보안 관련 HTTP 헤더를 설정하여 애플리케이션의 보안을 강화함
```javascript
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet()); // 기본 보안 헤더 설정

app.get('/', (req, res) => {
  res.send('Hello, Helmet!');
});

app.listen(3000);
```

### 7.Compression
compression 미들웨어는 응답 데이터를 압축하여 네트워크 성능을 개선함
```javascript
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression()); // 응답 데이터 압축

app.get('/', (req, res) => {
  res.send('Hello, Compression!');
});

app.listen(3000);
```

### 8.Serve-Static
serve-static 미들웨어는 정적 파일(예: 이미지, CSS 파일, JavaScript 파일)을 제공하는 데 사용됨(이것은 Express의 express.static 미들웨어에 내장되어 있음)
```javascript
const express = require('express');
const path = require('path');

const app = express();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
```
* 인수로 정적 파일의 경로를 제공​
* 파일이 있을 때 fs.readFile로 직접 읽을 필요 없음​
* 요청하는 파일이 없으면 알아서 next를 호출해 다음 미들웨어로 넘어감​
* 파일을 발견했다면 다음 미들웨어는 실행되지 않음

### 9.Multer
multer는 파일 업로드를 처리하는 데 사용되는 미들웨어이다. 주로 multipart/form-data 형식을 다루는 데 사용됨
```javascript
const express = require('express');
const multer = require('multer');
const app = express();

// 저장될 파일의 저장 경로와 파일명 설정
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); // 파일이 저장될 경로
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // 파일명 설정
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('myFile'), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send('File uploaded successfully');
});

app.listen(3000, () => console.log('Server started on port 3000'));
```
**single(fieldname):**
* 하나의 파일을 업로드한다.(fieldname은 폼 데이터에서 해당 파일의 필드 이름)
* 요청 객체에서 req.file을 통해 파일 정보에 접근할 수 있다.

**array(fieldname[, maxCount]):**
* 같은 필드 이름으로 여러 파일을 업로드
* req.files를 통해 파일들의 배열에 접근할 수 있음
* 하나의 요청 body 이름 아래 여러 파일이 있는 경우
  
**fields(fields):**
* 여러 필드에 여러 파일을 업로드한다. fields는 객체의 배열로 각 객체는 name과 maxCount 속성을 가짐
* 역시 req.files를 사용하여 파일 정보에 접근할 수 있음
* 여러 개의 요청 body 이름 아래 파일이 하나씩 있는 경우

**none():**
* 파일 없이 데이터만 업로드할 때 사용

**any():**
* 모든 필드에서 파일을 업로드할 수 있음

### 10.express-validator
express-validator는 요청 데이터의 유효성 검사 및 정제를 위한 미들웨어이다. 폼 데이터 또는 JSON 데이터의 유효성을 검증하는데 사용된다.
```javascript
const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

app.post('/user',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // 요청 데이터 처리
    res.send('User is valid');
  }
);

app.listen(3000);
```

### 11.passport
Passport는 사용자 인증을 위한 미들웨어로, 다양한 인증 전략과 함께 사용자의 로그인 과정을 간편하게 처리하는 데 도움을 준다. 또한, bcrypt와 같은 라이브러리를 사용하여 비밀번호를 안전하게 암호화할 수 있다.
```javascript
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const app = express();

app.use(session({ /* 세션 설정 */ }));
app.use(passport.initialize());
app.use(passport.session()); // express-session 뒤에 위치해야 함

passport.use(new LocalStrategy(async (username, password, done) => {
  // 사용자 인증 로직: 여기서 bcrypt로 비밀번호 확인
  // 예: const match = await bcrypt.compare(password, user.password);
}));

passport.serializeUser((user, done) => {
  done(null, user.id); // 사용자 ID만 세션에 저장
});

passport.deserializeUser((id, done) => {
  // 사용자 ID로 DB에서 사용자 정보 조회 후 req.user에 저장
  // 예: User.findById(id, (err, user) => done(err, user));
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.listen(3000);
```
* passport.initialize(): Passport를 초기화하고, 요청 객체(req)에 passport 설정을 심음​
* passport.session(): req.session 객체에 passport 정보를 저장
* passport.serializeUser: 사용자 인증 후 사용자의 정보를 세션에 어떻게 저장할지 정의한다. 일반적으로 사용자의 ID만 세션에 저장하여 메모리 사용을 최적화한다.
* passport.deserializeUser: 세션에 저장된 사용자 정보(ID)를 바탕으로 필요한 사용자 정보를 DB에서 조회한다. 조회된 사용자 정보는 각 요청의 req.user에 저장된다.

#### 모듈정리
* passport: 사용자 인증을 위한 Express.js의 유연한 미들웨어로, 다양한 인증 방식과 전략을 지원
* passport-local: Passport의 인증 전략 중 하나로, 사용자 이름과 비밀번호를 사용한 로컬 인증 방식을 제공
* bcrypt: 비밀번호를 안전하게 해시하기 위한 라이브러리로, 비밀번호를 암호화하고, 저장된 해시와 비교하는 기능을 제공
* express-session: Express 애플리케이션에서 세션 관리를 가능하게 하는 미들웨어로, 사용자별 세션 데이터를 서버에 저장

#### 패스포트 처리 과정

* 로그인 과정​
  1. 로그인 요청이 들어옴​
  2. passport.authenticate 메서드 호출​
  3. 로그인 전략 수행(일반적으로 passport-local 이용)
  4. 로그인 성공 시 사용자 정보 객체와 함께 req.login 호출​
  5. req.login 메서드가 passport.serializeUser 호출​
  6. req.session에 사용자 아이디만 저장​
  7. 로그인 완료​

* 로그인 이후 과정​
  1. 모든 요청에 passport.session() 미들웨어가 passport.deserializeUser 메서드 호출​
  2. req.session에 저장된 아이디로 데이터베이스에서 사용자 조회​
  3. 조회된 사용자 정보를 req.user에 저장​
  4. 라우터에서 req.user 객체 사용 가능

### 12.express-rate-limit
express-rate-limit은 요청 속도 제한을 설정하여 API를 보호하는 데 사용되는 미들웨어이다.
```javascript
const express = require('express');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 100 // 15분 동안 최대 100개의 요청 허용
});

const app = express();
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
```

# express.Router
Express.js에서 express.Router는 라우트를 모듈화하여 애플리케이션의 구조를 깔끔하게 유지하고 관리하기 쉽게 만드는 기능을 제공한다. Router 인스턴스는 미니 애플리케이션으로 간주될 수 있으며, 특정 경로에 대한 모든 라우트를 그룹화할 수 있다.
```javascript
// user.js
const express = require('express');
const router = express.Router();

// 사용자 목록 조회
router.get('/', (req, res) => {
  res.send('User list');
});

// 새 사용자 생성
router.post('/', (req, res) => {
  res.send('Create a new user');
});

// 사용자 정보 조회
router.get('/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

module.exports = router;
```
```javascript
// product.js
const express = require('express');
const router = express.Router();

// 상품 목록 조회
router.get('/', (req, res) => {
  res.send('Product list');
});

// 새 상품 생성
router.post('/', (req, res) => {
  res.send('Create a new product');
});

// 상품 정보 조회
router.get('/:id', (req, res) => {
  res.send(`Get product with ID ${req.params.id}`);
});

module.exports = router;
```
```javascript
// app.js
const express = require('express');
const userRouter = require('./users');
const productRouter = require('./products');

const app = express();
const port = 3000;

// '/users' 경로에 라우터 모듈 적용
app.use('/users', userRouter);

// '/products' 경로에 라우터 모듈 적용
app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```
app.js 파일에서는 users.js와 products.js 두 개의 라우터 모듈을 사용한다. 각각의 라우터는 /users와 /products 경로에 대한 라우트를 처리한다. 이렇게 하면, 각 기능 영역별로 라우트를 모듈화하여 관리할 수 있으며, 애플리케이션의 확장성과 유지 관리가 용이해진다.


### 404 미들웨어
요청과 일치하는 라우터가 없는 경우를 대비해 404 라우터로 처리할 수 있다.
이게 없으면 단순히 Cannot GET 주소 라는 문자열이 표시됨
```javascript
const express = require('express');
const app = express();
const port = 3000;

// 기존 라우트들...
// app.get('/', (req, res) => { ... });
// app.post('/submit', (req, res) => { ... });

// 404 에러 처리 미들웨어
app.use((req, res, next) => {
  res.status(404).send('Sorry, page not found');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### 라우터 그룹화
Express.js에서 라우터 그룹화는 주소는 같지만 HTTP 메서드(GET, POST, PUT, DELETE 등)가 다른 여러 라우트를 깔끔하게 관리할 수 있게 해준다. 라우터 그룹화를 사용하면 코드의 중복을 줄이고, 유지보수를 쉽게 할 수 있다.
```javascript
const express = require('express');
const app = express();

// GET 요청 처리
app.get('/item', (req, res) => {
  res.send('Item viewed');
});

// POST 요청 처리
app.post('/item', (req, res) => {
  res.send('Item added');
});

// PUT 요청 처리
app.put('/item', (req, res) => {
  res.send('Item updated');
});

// DELETE 요청 처리
app.delete('/item', (req, res) => {
  res.send('Item deleted');
});

app.listen(3000);
```
```javascript
const express = require('express');
const app = express();

// 라우터 그룹화
app.route('/item')
  .get((req, res) => {
    res.send('Item viewed');
  })
  .post((req, res) => {
    res.send('Item added');
  })
  .put((req, res) => {
    res.send('Item updated');
  })
  .delete((req, res) => {
    res.send('Item deleted');
  });

app.listen(3000);
```

# req,res
Express.js의 req (요청 객체)와 res (응답 객체)는 HTTP 요청 및 응답과 관련된 다양한 정보와 유틸리티를 제공한다. 아래는 각 객체에서 제공하는 주요 기능들에 대한 간단한 설명이다

### req (Request 객체)
* req.app: Express 애플리케이션 인스턴스에 접근(예: req.app.get('port'))
* req.body: body-parser 미들웨어가 파싱한 요청 본문을 담고 있음
* req.cookies: cookie-parser 미들웨어가 파싱한 쿠키 데이터를 담고 있음
* req.ip: 요청을 보낸 클라이언트의 IP 주소를 담고 있음
* req.params: 라우트 매개변수에 관한 정보를 담고 있는 객체
* req.query: URL 쿼리 스트링 파라미터를 담고 있는 객체
* req.signedCookies: 서명된 쿠키들을 담고 있으며, cookie-parser 미들웨어가 필요함
* req.get(헤더 이름): 요청 헤더의 특정 값을 반환

### res (Response 객체)
* res.app: req.app과 유사하게 응답 객체를 통해 애플리케이션 인스턴스에 접근
* res.cookie(키, 값, 옵션): 클라이언트에 쿠키를 설정
* res.clearCookie(키, 옵션): 설정된 쿠키를 제거
* res.end(): 데이터 없이 응답을 종료
* res.json(JSON): JSON 형식의 데이터로 응답
* res.redirect(주소): 클라이언트를 다른 주소로 리다이렉트
* res.render(뷰, 데이터): 템플릿 엔진을 사용하여 뷰를 렌더링하고 응답
* res.send(데이터): 다양한 타입의 데이터를 응답합니다. 문자열, HTML, 버퍼, 객체, 배열 등을 보낼 수 있음
* res.sendFile(경로): 지정된 경로의 파일을 전송
* res.setHeader(헤더, 값): 응답의 헤더를 설정
* res.status(코드): HTTP 응답 상태 코드를 설정

# 시퀄라이즈(Sequelize) ORM
Sequelize는 Node.js용으로 제공되는 인기 있는 ORM(Object-Relational Mapping) 라이브러리이다. ORM은 객체와 데이터베이스 테이블 간의 매핑을 쉽게 만들어 준다. 이를 통해 개발자는 SQL 쿼리를 직접 작성하지 않고도 데이터베이스를 효과적으로 조작할 수 있다. Sequelize는 MySQL, MariaDB, PostgreSQL등 다양한 SQL 데이터베이스와 호환된다.


#### Sequelize를 사용하기 위해 필요한 모듈:
* sequelize: Sequelize 라이브러리
* sequelize-cli: Sequelize 명령줄 인터페이스, 프로젝트 관리 및 마이그레이션 작업에 사용
* mysql2: MySQL 데이터베이스와의 연결을 위한 드라이버

#### 프로젝트 초기화 명령어:
* npx sequelize-cli init

### 사용 예시
```javascript
//models/user.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  return User;
};
```
```javascript
//models/post.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Post extends Model {}

  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'post'
  });

  return Post;
};
```
```javascript
//app.js
const Sequelize = require('sequelize');
const setupUserModel = require('./models/user');
const setupPostModel = require('./models/post');
const config = require('./config/config.json')['development'];

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  {
    host: config.host,
    dialect: config.dialect
  }
);

const User = setupUserModel(sequelize);
const Post = setupPostModel(sequelize);

// 데이터베이스 연결 및 모델 동기화
sequelize.sync()
  .then(() => console.log('Models have been synchronized successfully.'))
  .catch(error => console.error('This error occurred', error));
```

### 데이터베이스 연결
Sequelize를 사용할 때 config.json 파일은 데이터베이스 연결 구성을 저장하는 데 사용된다. 이 파일은 일반적으로 Sequelize CLI를 통해 생성되며, 개발, 테스트, 프로덕션 환경에 대한 다양한 데이터베이스 설정을 포함할 수 있다.
```javascript
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
이 파일을 통해 Sequelize는 다양한 환경에 맞게 데이터베이스 연결을 설정하고 관리할 수 있다. sequelize-cli 명령을 사용하여 데이터베이스를 생성하거나 마이그레이션을 수행할 때 이 구성 파일을 참조한다.

* development, test, production: 이 섹션들은 각각 개발, 테스트, 프로덕션 환경에 대한 구성을 정의
* username: 데이터베이스 사용자 이름
* password: 데이터베이스 비밀번호(데이터베이스가 비밀번호를 사용하지 않는 경우 null 또는 비어있는 문자열로 설정할 수 있음)
* database: 사용할 데이터베이스의 이름
* host: 데이터베이스 서버의 호스트명 또는 IP 주소
* dialect: 사용하는 데이터베이스의 종류

### 자주 사용되는 Sequelize CLI 명령어
* npx sequelize-cli init: Sequelize 구성을 위한 폴더와 파일을 생성
* npx sequelize-cli model:generate --name Model --attributes name:string,age:number: 새로운 모델과 해당 마이그레이션 파일을 생성
* npx sequelize-cli db:migrate: 마이그레이션을 실행하여 데이터베이스 스키마를 변경
* npx sequelize-cli db:migrate:undo: 마지막 마이그레이션을 되돌림
* npx sequelize-cli seed:generate --name demo-user: 시더 파일을 생성
* npx sequelize-cli db:seed:all: 모든 시더를 실행하여 데이터베이스에 초기 데이터를 삽입

### init과 associate 활용해 모델 정의,연결
이 방식은 각 모델을 클래스로 정의하고, init과 associate 메서드를 통해 모델을 구성하며 관계를 설정한다. 이는 모델과 관계를 보다 명시적이고 구조화된 방식으로 관리할 수 있게 하며, 크고 복잡한 애플리케이션의 데이터베이스 구조를 쉽게 이해하고 유지보수할 수 있게 도와준다.
init 메서드는 각 모델의 구조(스키마)를 정의하고, associate 메서드는 다른 모델과의 관계를 설정한다. index.js에서 이러한 모델들을 모아서 Sequelize 인스턴스와 연결하고, 모델 간 관계를 활성화하는 중심적인 역할을 한다.

#### 1. 모델 정의 및 초기화 (init)
각 모델 파일에서 (User.js, Comment.js 등), 모델 클래스를 정의하고 init 메서드를 사용하여 Sequelize 인스턴스와 모델을 연결한다.(init 메소드는 모델의 스키마를 정의)
```javascript
const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // 모델 스키마 정의
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
}
```

#### 2. 모델 간 관계 설정 (associate)
모델 간의 관계(예: 1:N, N:M 등)를 설정하기 위해 associate 메서드를 사용한다. 이 메서드는 다른 모델과의 관계를 정의하며, 모델 간의 연결(외래키, 연관 키 등)을 설정한다.
```javascript
class User extends Sequelize.Model {
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
}
```

#### 3. index.js에서 모델 연결
index.js 파일에서는 Sequelize 인스턴스를 생성하고, 모든 모델을 초기화하며, 모델 간 관계를 설정한다.
```javascript
const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const db = {};
const sequelize = new Sequelize(/* 데이터베이스 설정 */);

db.sequelize = sequelize;
db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;
```

## 모델간 관계 정의
Sequelize에서 모델 간 관계를 정의할 때 1:1, 1:N, N:M 관계를 다루는 방식은 각각 다르다.

### 1:1 관계 (hasOne, belongsTo)
1:1 관계에서는 hasOne과 belongsTo를 사용한다. 예를 들어, 사용자와 사용자 프로필이 1:1 관계라고 가정
```javascript
// User 모델 (User.js)
class User extends Sequelize.Model {
  static associate(db) {
    db.User.hasOne(db.Profile);
  }
}

// Profile 모델 (Profile.js)
class Profile extends Sequelize.Model {
  static associate(db) {
    db.Profile.belongsTo(db.User);
  }
}
```

### 1:N 관계 (hasMany, belongsTo)
1:N 관계에서는 hasMany와 belongsTo를 사용한다. 사용자가 여러 댓글을 작성하는 경우
```javascript
// User 모델 (User.js)
class User extends Sequelize.Model {
  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id', as: 'Comments' });
  }
}

// Comment 모델 (Comment.js)
class Comment extends Sequelize.Model {
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id', as: 'Writer' });
  }
}
```
여기서 as: 'Comments'는 User 모델과 Comment 모델 간의 관계에서, User 인스턴스에서 해당 사용자가 작성한 댓글들을 user.Comments로 접근할 수 있게 한다. 마찬가지로, as: 'Writer'는 Comment 모델에서 해당 댓글을 작성한 User 인스턴스에 comment.Writer로 접근할 수 있게 한다.

* foreignKey: 외래 키는 연관된 대상 모델에 있는 필드를 지정하여 원본 모델과의 관계를 연결하는 데 사용된다. 예를 들어, 한 모델이 다른 모델의 ID를 참조할 때 사용(위의 예에서는 Comment 모델의 commenter)
* sourceKey: 원본 모델에서 연관 관계를 정의할 때 참조하는 필드를 지정한다. 기본적으로 원본 모델의 기본 키를 참조하나, 다른 필드로 지정할 수도 있다.(위의 예에서는 User 모델의 id)
* targetKey: 연관된 대상 모델에서 해당 관계에 매칭되는 필드를 지정한다. 주로 대상 모델의 기본 키나 다른 중요한 필드를 참조하는 데 사용됩니다.(위의 예에서는 User 모델의 id)

요약하자면, sourceKey는 원본 모델(주 모델)에서 연관관계를 위해 사용되는 필드를 지정하는 데 사용되며, targetKey는 대상 모델(관련 모델)에서 foreignKey가 참조하는 필드를 지정하는 데 사용된다.

<br/>

Comment 모델에서 commenter 필드가 직접 정의되어 있지 않아도 외래 키로 작동하는 이유는 Sequelize의 관계 설정 방식 때문이다. 
여기서 중요한 점은 Sequelize가 모델 간의 관계를 정의할 때, 실제 데이터베이스 테이블에 필드를 자동으로 추가할 수 있다는 것이다.
```javascript
Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
```

이 코드 라인은 Comment 모델이 User 모델에 속한다는 것을 나타낸다다. 
여기서 ```foreignKey: 'commenter'``` 부분은 Comment 테이블에 commenter라는 필드를 추가하고, 이 필드가 User 테이블의 id 필드(targetKey)와 연결되도록 설정합니다.

즉, Comment 모델의 정의에서 직접 commenter 필드를 정의하지 않았더라도, Sequelize가 관계를 설정하는 과정에서 데이터베이스의 comments 테이블에 commenter 필드를 자동으로 추가하게 된다. 
이 commenter 필드는 User 테이블의 id 필드와 연결되어, 댓글이 어떤 사용자에 의해 작성되었는지를 나타내는 외래 키 역할을 하게 된다.

따라서, Sequelize를 사용할 때는 모델 간의 관계를 설정함으로써, 실제 데이터베이스 테이블에 필요한 외래 키 필드들이 자동으로 관리될 수 있다.


#### as 추가기능
Sequelize는 다음과 같은 메서드를 User 및 Comment 모델의 인스턴스에 자동으로 추가한다

**1.User 모델에 추가되는 메서드들:**
* User 모델에 hasMany 관계가 정의되어 있으므로, User 인스턴스에 대해 다음과 같은 메서드들이 생성된다:

```javascript
addComment: 하나의 Comment를 User에 추가한다
addComments: 여러 Comment를 User에 추가한다.
getComments: User에 연관된 모든 Comment를 조회한다.
removeComment: User에서 특정 Comment를 제거한다.
removeComments: User에서 여러 Comment를 제거한다.
hasComment: User가 특정 Comment를 가지고 있는지 확인한다.
hasComments: User가 여러 Comment를 가지고 있는지 확인한다.
countComments: User에 연관된 Comment의 수를 세어 반환한다.
```

**2.Comment 모델에 추가되는 메서드들:**
* Comment 모델에 belongsTo 관계가 정의되어 있으므로, Comment 인스턴스에는 다음과 같은 메서드가 생성된다:

```javascript
getUser: Comment와 연관된 User를 조회한다.
setUser: Comment와 연관된 User를 설정하거나 변경한다.
```

이러한 메서드들은 Sequelize가 제공하는 자동화된 관계 관리 기능을 통해 데이터베이스의 관계를 더 쉽게 조작할 수 있게 해준다. 예를 들어, 특정 사용자의 모든 댓글을 조회하거나, 댓글에 작성자 정보를 추가하는 등의 작업이 간편해진다.

### N:M 관계 (belongsToMany)
N:M 관계에서는 belongsToMany를 사용한다. 예를 들어, 사용자와 그룹이 있고, 하나의 사용자가 여러 그룹에 속하며 하나의 그룹에 여러 사용자가 속할 수 있는 경우
```javascript
// User 모델 (User.js)
class User extends Sequelize.Model {
  static associate(db) {
    db.User.belongsToMany(db.Group, { through: 'UserGroup' });
  }
}

// Group 모델 (Group.js)
class Group extends Sequelize.Model {
  static associate(db) {
    db.Group.belongsToMany(db.User, { through: 'UserGroup' });
  }
}
```
* through: 이 옵션을 사용하여 두 모델(User와 Group) 간의 관계를 중간 테이블(이 경우 UserGroup이라는 이름의 테이블)을 통해 연결한다. UserGroup 테이블은 User와 Group 모델 각각의 ID를 외래 키로 사용하여 두 모델 사이의 관계를 저장하고 관리한다. 이렇게 함으로써, 각 User는 여러 Group에 속할 수 있고, 각 Group은 여러 User를 포함할 수 있는 다대다 관계를 구현할 수 있다.


#### 정리
* 1:1 관계: hasOne과 belongsTo를 사용하여 서로 연결한다. 두 모델 중 한 모델에 외래키가 생긴다.
* 1:N 관계: hasMany로 한 쪽에서 다른 쪽을 여러 개 가질 수 있음을 표현하고, belongsTo로 다른 쪽이 하나에 속함을 나타낸다.
* N:M 관계: belongsToMany를 양쪽 모델에 사용하여 N:M 관계를 설정한다. 이때 through 옵션으로 연결 테이블을 지정한다.

## 시퀄라이즈 쿼리
sequelize를 사용하면 JavaScript 문법으로 복잡한 SQL 쿼리를 수행할 수 있으며, 모델 간의 관계 설정 및 조회를 간편하게 할 수 있다.
### [기본 쿼리]
**1.생성**
```javascript
Model.create({
  column1: value1,
  column2: value2
});
```

**2.조회**
```javascript
Model.findAll({
  where: { column: value }
});

Model.findOne({
  where: { column: value }
});
```

**3.수정**
```javascript
Model.update({ column1: newValue }, {
  where: { column2: value }
});
```

**4.삭제**
```javascript
Model.destroy({
  where: { column: value }
});
```
### [관계 쿼리]
**1:1 관계**
```javascript
Parent.hasOne(Child);
Child.belongsTo(Parent);
```

**1:N 관계**
```javascript
Parent.hasMany(Child);
Child.belongsTo(Parent);
```

**N:M 관계**
```javascript
Model1.belongsToMany(Model2, { through: 'Model1Model2' });
Model2.belongsToMany(Model1, { through: 'Model1Model2' });
```

### [관계 쿼리를 사용한 데이터 조회]

**1.하나의 관계 포함 (Include)**

```javascript
Parent.findAll({
  include: [{
    model: Child,
    as: 'Alias'
  }]
});
```
* 이 쿼리는 Parent 모델의 모든 인스턴스를 찾되, Child 모델의 데이터도 함께 포함한다.(as: 'Alias'는 Child 모델이 Parent 모델과 연결될 때 사용되는 별칭)
* 결과적으로, 반환되는 각 Parent 인스턴스에는 연관된 Child 인스턴스들이 'Alias'라는 이름으로 포함됨

**2.여러 관계 포함**
```javascript
Parent.findAll({
  include: [
    { model: Child1, as: 'Alias1' },
    { model: Child2, as: 'Alias2' }
  ]
});
```
* 이 쿼리는 Parent 모델의 모든 인스턴스를 찾되, Child1과 Child2 모델의 데이터를 각각 Alias1, Alias2라는 별칭으로 포함한다.


### [고급 쿼리 옵션]
**1.조건 추가 (Where)**
```javascript
Model.findAll({
  where: {
    column: {
      [Sequelize.Op.eq]: value // 등등 다양한 연산자 사용 가능
    }
  }
});
```

**2.정렬 (Order)**
```javascript
Model.findAll({
  order: [['column', 'ASC']] // 또는 'DESC'
});
```

**3.페이징 (Limit, Offset)**
```javascript
Model.findAll({
  limit: 10,
  offset: 0
});
```

**4.집계 함수 (Aggregate)**
```javascript
Model.max('column');
Model.sum('column');
```

### 직접 SQL 쿼리
Sequelize는 ORM의 장점을 제공하면서도 필요할 때 직접 SQL 쿼리를 실행할 수 있는 기능을 지원한다. 이를 통해 복잡하거나 특수한 경우에 원시 SQL 쿼리를 사용할 수 있다.
```javascript
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// 원시 SQL 쿼리 실행
sequelize.query('SELECT * FROM table WHERE status = :status', {
  replacements: { status: 'active' },
  type: Sequelize.QueryTypes.SELECT
}).then(results => {
  console.log(results);
});
```

# Mongoose
MongoDB에 대해서는 Sequelize와 유사한 ORM 접근 방식을 취하는 다른 도구인 Mongoose가 있다. Mongoose는 MongoDB를 위한 Node.js 기반의 ORM으로, 데이터 모델링과 관계, 쿼리 구성을 쉽게 할 수 있게 해준다.

## Mongoose 쿼리
Mongoose를 사용하면 JavaScript 문법으로 복잡한 SQL 쿼리를 수행할 수 있으며, 모델 간의 관계 설정 및 조회를 간편하게 할 수 있다.

### [기본 쿼리]
**1.생성**
```javascript
const entity = new Model({ key: value });
entity.save();
```

**2.조회**
```javascript
Model.find({ key: value }); // 여러 문서 찾기
Model.findOne({ key: value }); // 단일 문서 찾기
```

**3.수정**
```javascript
Model.updateOne({ key: value }, { $set: { key: newValue } });
Model.updateMany({ key: value }, { $set: { key: newValue } });
```

**4.삭제**
```javascript
Model.deleteOne({ key: value });
Model.deleteMany({ key: value });
```
### [관계 쿼리]
**1:1 관계**
```javascript
// 내장 문서를 사용하는 방법
const childSchema = new mongoose.Schema({ name: String });
const parentSchema = new mongoose.Schema({ child: childSchema });
```

**1:N 관계**
```javascript
// 참조를 사용하는 방법
const parentSchema = new mongoose.Schema({
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }]
});
```

**N:M 관계**
```javascript
// 모델 간의 참조
const model1Schema = new mongoose.Schema({
  model2s: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Model2' }]
});
```

### [관계 쿼리를 사용한 데이터 조회]
Mongoose에서 관계 쿼리를 사용한 데이터 조회는 Sequelize와는 다르게 작동한다. Mongoose에서는 주로 참조(Reference)와 population을 사용하여 관계를 조회한다.
Mongoose의 populate 메소드는 SQL의 JOIN과 유사한 기능을 수행하지만, MongoDB의 NoSQL 특성상 JOIN과는 다르게 내부적으로 작동한다. populate는 지정된 참조를 실제 문서로 채우는 작업을 수행하여, 관계된 데이터를 편리하게 조회할 수 있게 해즌다.

**1.하나의 관계 포함 (Populate)**

```javascript
Parent.find().populate('child');
```
 'child'는 Parent 모델에서 정의된 참조 필드를 나타낸다. 이를 통해 Parent 문서와 연관된 Child 문서를 조회할 수 있다

**2.여러 관계 포함**
```javascript
Parent.find().populate('child1').populate('child2');
```
Parent 모델은 'child1'과 'child2'라는 두 개의 참조 필드를 가지고 있으며, 각각 다른 Child 모델을 참조

**3.N:M 관계**
```javascript
Model1.find().populate({
  path: 'model2s',
  model: 'Model2'
});
```
N:M 관계에서는 보통 중간 테이블 대신 문서의 배열로 관계를 표현한다. 여기서 'model2s'는 Model1에 저장된 Model2 문서들의 ID 배열을 의미

#### 예시
모델 간의 1:N 관계에서, 예를 들어 Parent 모델이 여러 Child 모델을 참조하는 경우
```javascript
// Parent 모델 정의
const ParentSchema = new mongoose.Schema({
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }]
});

// Child 모델 정의
const ChildSchema = new mongoose.Schema({
  name: String
});

// 관계 포함하여 데이터 조회
Parent.find().populate('children').then(result => {
  console.log(result);
});
```


### [고급 쿼리 옵션]
**1.조건 추가 (Where)**
```javascript
Model.find().where('key').equals(value);
```

**2.정렬 (Order)**
```javascript
Model.find().sort({ key: 1 }); // 1 (오름차순), -1 (내림차순)
```

**3.페이징 (Limit, Offset)**
```javascript
Model.find().limit(10).skip(10);
```

**4.집계 함수 (Aggregate)**
```javascript
Model.aggregate([{ $match: { key: value } }, { $group: { /* ... */ } }]);
```


# JWT
Express에서 JSON Web Token(JWT)을 사용하여 인증을 구현할때는 보통 ```jsonwebtoken``` 모듈을 사용한다.
구현내용은 다음과같다.

#### 1.토큰 생성 미들웨어
JWT를 생성하는 미들웨어를 작성한다. 예를 들어, 사용자 로그인 후 토큰을 생성할 수 있다.
```javascript
const jwt = require('jsonwebtoken');

const generateToken = (req, res, next) => {
  const user = { name: req.body.name }; // 사용자 정보 예시
  const secretKey = 'your_secret_key'; // 비밀키 설정
  const token = jwt.sign(user, secretKey, { expiresIn: '1h',issuer: 'user', }); // 토큰 생성
  req.token = token;
  next();
};
```
**jwt.sign 메서드:** 
이 메서드는 새로운 토큰을 생성한다.
* 첫 번째 인자는 토큰에 포함될 데이터(페이로드)이다.
* 두 번째 인자는 비밀키로, 토큰의 무결성을 보장하는 데 사용된다.
* 세 번째 인자는 옵션 객체로, 토큰의 만료 시간(expiresIn), 발행자(issuer) 등을 설정할 수 있다.

#### 2.토큰 검증 미들웨어
요청에서 토큰을 추출하고 검증하는 미들웨어를 작성한다.
```javascript
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // 토큰 없음

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.sendStatus(403); // 토큰 검증 실패
    req.user = user;
    next(); // 검증 성공
  });
};
```
**jwt.verify 메서드:**
이 메서드는 제공된 토큰의 유효성을 검증한다.
* 첫 번째 인자는 검증할 토큰이다.
* 두 번째 인자는 토큰을 생성할 때 사용한 동일한 비밀키이다.
* 콜백 함수는 검증 결과를 처리한다. 유효한 토큰일 경우 페이로드를 반환하고, 그렇지 않으면 오류를 반환한다.

#### 3.Express 애플리케이션에 미들웨어 적용
Express 애플리케이션에 위에서 작성한 미들웨어를 적용한다.
```javascript
const express = require('express');
const app = express();
app.use(express.json()); // JSON 요청 본문 처리

// 로그인 라우트, 토큰 생성
app.post('/login', generateToken, (req, res) => {
  res.json({ token: req.token });
});

// 보호된 라우트, 토큰 필요
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected content' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

# 사용량 제한
사용량 제한을 구현하기 위해 Express에서 ```express-rate-limit``` 라이브러리를 사용할 수 있다. 이는 DOS 공격과 같은 무차별적인 요청을 방지하는 데 유용하다. 
```express-rate-limit```을 사용하면 일정 시간 동안 API 요청 횟수를 제한할 수 있다.

```javascript
const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();

// API 요청 제한 설정
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 100, // 15분 동안 최대 100번 요청 허용
  delayMs: 0, // 요청 간의 지연 시간 없음
  handler: (req, res, /*next*/) => {
    res.status(429).json({
      message: "Too many requests, please try again later."
    });
  }
});

// 전체 애플리케이션에 대한 요청 제한 적용
app.use(apiLimiter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

# cors

```javascript
const express = require('express');

const { verifyToken, apiLimiter, corsWhenDomainMatches } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag } = require('../controllers/v2');

const router = express.Router();

router.use(corsWhenDomainMatches);

// POST /v2/token
router.post('/token', apiLimiter, createToken);

// POST /v2/test
router.get('/test', apiLimiter, verifyToken, tokenTest);

// GET /v2/posts/my
router.get('/posts/my', apiLimiter, verifyToken, getMyPosts);

// GET /v2/posts/hashtag/:title
router.get('/posts/hashtag/:title', apiLimiter, verifyToken, getPostsByHashtag);

module.exports = router;
```

```javascript
const cors = require('cors');
const { Domain } = require('../models');

exports.corsWhenDomainMatches = async (req, res, next) => {
  try {
    const domain = await Domain.findOne({
      where: { host: new URL(req.get('origin')).host },
    });

    if (domain) {
      cors({
        origin: req.get('origin'), // 요청의 origin을 기반으로 CORS 허용
        credentials: true, // 쿠키 및 인증 관련 정보를 포함시키기 위함
      })(req, res, next);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
```
* origin: req.get('origin')은 요청이 발생한 출처(origin)를 기반으로 CORS를 허용한다. 이는 특정 도메인에서만 리소스에 접근할 수 있도록 제한하는 데 사용된다.
* credentials: true 옵션은 인증 정보(쿠키, HTTP 인증 등)를 포함한 요청을 허용한다. 이를 통해 세션 기반 인증 등을 사용하는 API에서 필요하다.
