# Javascript

- 프로그래밍 언어
  - 언어
    - 문법
  - 활용
    - 웹 프론트엔드 개발 -> 브라우저 렌더링, HTML 콘텐츠와의 연계성

- Javascript 문법
  - 데이터, 변수, 연산
  - 명령문(구문)
  - 함수
  - 배열, 객체, Class
  - 추가 문법

- Javascript 활용
  - DOM
  - C(reate)R(ead)U(pdate)D(elete)
  - Effect

- Version
  - ES5
  - ES6

## 데이터, 변수, 연산

- 데이터 타입
  - 문자
    - 문자(Character)
    - 문자열(String)
  - 숫자
    - 정수
    - 실수
  - 불리언(boolean)
    - 참/거짓
  - 배열
  - 객체

- 변수
  - 수(값)를 저장하는 공간
  - 자바스크립트는 데이터 타입을 구분하지 않는 언어
  - 변수 선언 키워드
    - var(ES5)
    - let, const(ES6)
```
var a;
let b;
const c;
```

** TypeScript 언어 : Javascript + data type 구분

- 연산
  - 대입(할당) 연산자 : =
    - 값을 변수에 대입/할당

```
// a 변수를 선언/정의하면서 동시에 0 값을 a변수에 대입 => 초기화
var a = 0;
a = 5;
```

  - 산술 연산자
    - % :  나머지
    - 산술 + 대입 연산

```
나머지 연산
let number = 0;

number = 5/3; // 1.6667
numner = 5%3; // 2

let a = 1;

a = a + 4;
a += 4;

a = a + 1;
a += 1;
a++;

a = a - 1;
a -= 1;
a--;
```

  - 문자열 연산
    - + : 문자열 연결 연산
    - "" 를 사용한 데이터 문자
    - 16(숫자) vs "16"(문자)

```
16 + 10 => 26

"16" + "10" => "1610"

"16" + 10 => "1610"
```
