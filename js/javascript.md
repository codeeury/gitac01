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

## Javascript 작성방식

- External : 외부 파일
- Internal : html 파일에 javascript 코드 블럭
- Inline : Tag에 직접 작성

```
External

<script src="example.js"></script>

Internal

<script>
var a = 1;
var b = 2;
</script>
```

## 데이터, 변수, 연산

### 데이터 타입

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

### 변수

- 수(값)를 저장하는 공간
- 자바스크립트는 데이터 타입을 구분하지 않는 언어
- 변수 선언 키워드
  - var(ES5)
    - 변수 내용 변경 가능
  - let(ES6)
    - 변수 내용 변경 가능
  - const(ES6)
    - 변수 내용 변경 불가능

```
var a;
let b;
const c;
```

\*\* TypeScript 언어 : Javascript + data type 구분

### 연산

- 대입(할당) 연산자 : =
  - 값을 변수에 대입/할당

```
// a 변수를 선언/정의하면서 동시에 0 값을 a변수에 대입 => 초기화
var a = 0;
a = 5;
```

- 산술 연산자
  - % : 나머지
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
  - - : 문자열 연결 연산
  - "" 를 사용한 데이터 문자
  - 16(숫자) vs "16"(문자)

```
16 + 10 => 26

"16" + "10" => "1610"

"16" + 10 => "1610"
```

- 비교 연산
  - true/false의 boolean 데이터 타입의 결과값
  - ==, != : 데이터 타입을 구분하지 않고 크기 비교
  - ===, !== : 데이터 타입을 구분하면서 크기 비교

```
"1" == 1 => true
"1" === 1 => false
```

- 논리 연산
  - 논리값(true/false)을 연산

```
모두 true일때만 결과값 true
true && true => true
true & false => false

모두 false일때만 결과값 false
true || false => true

!false => true

3>2 && 5>3 => true && true => true
3<2 && 5>3 => false && true => false
3<2 || 5>3 => false && true => true
```

## 명령문

- 프로그래밍의 논리적 흐름을 제어

### Condition Statement - if

- 조건문, 분기문
- 조건식/비교식(condition)의 결과값(true/false)에 따라 실행 코드를 분기하는 명령문
- 조건식은 true/false의 결과가 나오는 모든 식
- false => 0
- true => 0을 제외한 모든 정수(javascript)
- if : 기본 사용
- else if : 여러번 반복 사용 가능
- else : 마지막에 한번 사용

```
// 조건식의 결과가 참이면 실행코드를 실행, 거짓이면 실행하지 않음
if(조건식){
  실행코드
}

if(a>3){

}
if(true){

}
let a = 0;
if(a-1){

}

if(a>5){
  실행코드 1
} else {
  실행코드 2
}

if(a>90){
  실행코드 1
} else if(a>80) {
  실행코드 2
} else if(a>70){
  실행코드 3
} else if(a>60){
  실행코드 4
} else {
  실행코드 5
}
```

### switch

- 한번에 여러 갈래로 분기하는 경우
- 표현식(expression) : 결과값이 일반 연산의 모든 결과값을 사용하는 식

```
let a = 0;
switch(a+1){
  case 1:
    실행코드 1
  case 2:
    실행코드 2
  case 3:
    실행코드 3
  ...
  default:
    실행코드 4
}
```

### for

- 각 부분에 필요한 구문(statement) 표기에 주의

```
for(구문1;구문2;구문3){
  // 실행코드
}

구문 1
  - for loop가 시작될 때 최초 한번 실행
  - 초기화 값 지정

구문 2
  - 실행코드를 실행하기 위한 조건식

구문 3
  - 반복문이 실행되는 동안 매번 실행되는 구문
```

### while

- 무한루프 구현

```
while(조건식){

}

while(true){
  // 로그인 case의 경우

  // 조건식 비교 블럭 : 아이디가 같은지/다른지
  // 결과값 : true => 무한루프를 종료(break)
  // 결과값 : false => 계속 반복
}
```

## 함수

- packaging, grouping => 재사용
- 사용할 재료 : 매개변수
- 결과값 : return(반환)
  - 함수를 호출한 위치로 결과값을 되돌려 주는 것
- 함수 실행 => 함수 호출(call)

```
// 함수 정의(선언)

function 함수이름(){
  실행코드
}

const 변수(함수)이름 = function(){
  실행코드
}

function(){} : 익명함수
```

## 배열, 객체, Class

- 집합체 형태의 데이터
- 비슷한 형태의 데이터들 끼리 하나의 집합체 형태로 묶어서 사용
  - 비슷한 형태
    - 같은 타입의 데이터 : 배열
    - 같은 주제(소속)의 데이터 : 객체, class

### 배열

- 같은 데이터 타입의 데이터들의 집합
- 여러개의 데이터를 배열 형태로 선언하면 동일한 대표 이름과 인덱스 번호를 사용할 수 있음

```
let car = ['Volvo', 'BMW', 'Saab'];

// 추가
car.push('Kia');

// 출력
console.log(car[0]);
console.log(car[2]);

// 수정
car[1] = 'Benz';

// 삭제
car.pop();
```

### 객체

- 여러가지 종류의 데이터 집합
- 프로퍼티, 메소드로 구성

### Class

- 객체 데이터를 생성할 수 있게 하는 설계도

```
class Car{
  constructor(){
    this.name = 'Kia';
    this.model = 'EV6';
  }
}

let car1 = new Car();
```

## 추가 문법

### 변수 스코프(범위)

- 변수가 적용(인식)되는 범위
- block, function 범위는 해당 범위에서만 적용(인지)가 가능
- global 범위는 전체범위에서 적용(인지)가 가능

  - Block Scope
  - Function Scope
  - Global Scope

- var

  - Function, Global

- let, const
  - Block, Function, Global

```
let a = 1; // Global Scope

if(a<5){
  let b = 2; // Block Scope
}

function add(){
  let c = 3; // Function Scope
}
```

### Arrow Function

```
function arrow(){}

let arrow = function(){}

let arrow = () => {}
```
