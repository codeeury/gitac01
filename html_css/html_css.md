# HTML

## HTML Introduction

- HTML : Hyper Text Markup Language

  - Hyper Text : 하이퍼링크로 연결된 웹 문서 => 웹 문서(페이지)
  - Markup Language : 표시 언어

- HTML 표시 내용

  - Web Page의 Contents
    - Text Contents
    - Multimedia Contents : image, video, audio
      - Embed(ed) Contents
  - Web Page의 Structure

- 학습 내용
  - 문법
  - 활용

## HTML Basic

- 기본구조

※ ` : backtick

```
<!DOCTYPE html>
<html>
  <head>
    웹 문서의 부가정보
  </head>
  <body>
    웹 문서의 내용
  </body>
</html>
```

## HTML Element

- Tag와 Contents로 구성
- Tag는 시작태그와 종료태그로 구성
  - contents와 종료태그 없이 시작태그만 있는 요소 : 빈요소(Empty Element)

```
<h1>제목</h1>

<br> => 빈 요소(Empty Element)
```

## HTML Attribute

- HTML Tag의 추가정보

- syntax : name="value"

```
<img src="photo.jpg" alt="사진">
```

## Text Contents Element

### Heading

- 제목
- h(heading)
  - h1 ~ h6

### Paragraph

- p(paragraph) : 단락

- hr(Horizontal Rules) : 수평선(단락을 구분)

- br(Line Break) : 강제 줄바꿈
  (※ 강제 공백(Entity Code) : &nbsp; - Non-breaking space)
  (※ & : ampersand)
  - HTML Text : 줄바꿈, 공백 인식
    - 공백 1칸으로 인식

### HTML List

- 순서없는 목록 : ul, li
- 순서있는 목록 : ol, li
- 설명 목록 : dl, dt, dd

※ 포함관계/중첩관계(Nested Element)

- 포함하는 요소 : 부모요소(Parent), 조상요소(ancestor)
- 포함되는 요소 : 자식요소(Child), 자손요소(descendant)
- 이웃하는 요소 : 형제요소(sibling)

### HTML Link

- 하이퍼링크 연결

- a(anchor)

  - href(hypertext reference) attribute : 연결되는 페이지의 주소 정보
  - target attribute : 새탭 열기 설정
    - target="\_blank" : 새탭 열기

- Bookmark 기능
  - 목적지에 id attribute를 사용해서 이름 지정
  - a 태그의 href 속성에 "#이름" 으로 위치 표시

### HTML Table

- 표를 표시
- table(표 영역 표시)
- tr(table row) : 행
- th(table heading) : 열 제목(칸)
- td(table data) : 열(칸)
- table generator
  https://www.tablesgenerator.com/html_tables

## Multimedia Contents

### HTML image

- img : image

- attribute
  - src(source) : 이미지의 파일 경로, 이름
  - alt(altanative) : 대체 텍스트

### HTML Video

- video tag
- attribute(name만 사용하는 형태)
  - controls : 동영상 컨트롤 버튼 표시 여부
  - autoplay : 자동 재생
  - muted : 음소거
  - loop : 반복 재생
  - poster : 영상 포스터(대체) 이미지

## Semantic Element

- 영역을 구분하는 Element를 의미있게 사용하는 것

- header : 로고, 로그인/회원가입, 언어변경
- nav(navigation) : gnb(global navigation bar), lnb(local navigation bar)
- section : 웹 페이지의 본문 / 영역 구분
- article : 웹 페이지의 본문 / 독린된 글/내용
- aside : 부수적인 내용 / 광고 배너
- footer : 웹 사이트의 위치 정보 / 관련 링크
- figure : 다이어그램/이미지 시각 요소
- main : 웹 페이지 본문 전체

## URL / File Path

- URL(Uniform Resource Locator)

```
https://www.naver.com/video/movie.mp4

=> https://도메인네임/상세경로:포트번호

IP 주소 : Internet Protocol 주소 => 인터넷에서 사용하는 실제 주소

Ex) 192.168.0.1 : 0~255까지의 숫자 4개로 구성

도메인 네임: 영어 단어(줄임말)로 구성되어 있는 식별 이름

도메인 네임 서버(시스템) : 도메인 네임 => IP 주소로 변환

```

- 경로(URL/File Path) 지정 방식

  - root : 해당 경로의 시작 위치
  - 절대 지정 방식
    - 파일 경로의 전체 URL을 표현하는 방식
  - 상대 지정 방식
    - 현재 페이지를 기준으로 일부 URL을 표현하는 방식
    - root 상대 경로 방식 : root를 기준으로 상대적인 URL 표현

```
domain : www.abc.com

/(root) - html - index.html
        - images - photo.jpg

절대 방식 : https://www.abc.com/images/photo.jpg

상대 방식(현재페이지 : index.html) :  ../images/photo.jpg

root 상대방식 : /images/photo.jpg
```

## HTML Head

- head element

  - title : 웹사이트 제목(브라우저 탭에 표시)
  - meta : 웹사이트 관련 정보
  - link : css 파일 불러오기
  - style : css 코드 작성
  - script : js 코드 작성 / 파일 불러오기

- meta

  - charset(character set) : 문자 세트 - 글자(문자)를 표시하는 방식
  - 종류/개수 => 용량

    - bit : 0/1이 저장되는 공간
    - 1 bit가 저장/표현할 수 있는 개수(가짓수) : 2
    - 2 _ 2 _ 2 \* 2 => 4 bit => 16개
    - 1 byte = 8 bit => 256개(0~255) (byte < KB < MB < TB < PB ...)

  - UTF-8 : 글자(문자) 표기 방식 중 하나

    - 2 byte로 글자를 표시(65536개) : 유니코드
    - 영문 1byte로 표현, 한글 2byte로 표시
    - UTF(Universal Coded Character Set + Transformation Format – 8-bit)

  - EUC-KR : 한글, 영문 전용 표시 방식

## HTML Block & Inline

- Block

  - 줄바꿈 되어 새 줄에 표시됨
  - 너비가 가능한 전체가 채워짐
  - Text, 블럭요소, 인라인요소 모두 포함할 수 있음

- Inline

  - 줄바꿈 되지 않고 한 줄에 표시됨
  - 너비가 콘텐츠/자식요소에 맞춰짐
  - Text, 인라인요소 포함할 수 있음(블럭 요소는 포함할 수 없음 - 예외 : a 태그)

- div(division)

  - 단순히 영역을 구분하거나 그룹핑을 하는 컨테이너 요소
  - 블럭요소

- span
  - 단순히 영역을 구분한거나 그룹핑을 하는 컨테이너 요소
  - 인라인 요소

## HTML class, id

- 해당 요소에 이름(식별자/identifier) 지정

```
<p class="클래스이름">...</p>
<p id="아이디이름">...</p>
<p>...</p>
```

- 클래스

  - 하나의 웹문서내에서 동일한 이름을 사용할 수 있음
  - 하나의 요소에 여러 개의 이름을 사용할 수 있음

- 아이디
  - 하나의 웹문서내에서 동일한 이름을 사용할 수 없음
  - 하나의 요소에 여러 개의 이름을 사용할 수 없음

```
<div class="text import">text</div>
<div class="text">text</div>

<div id="title">title1</div>
<div id="title">title2</div> => (X)

<div id="title import">title3</div> => (X)
```

- naming 표기법
  - 네이밍할 때 영어 한개 단어로만 네이밍을 하기 힘들기 때문에 여러 단어를 연결해서 네이밍
  - 연결되는 단어를 구분할 수 있도록 표기

```
hello html world : 일반 표기

네이밍
hello_html_world : snake case (파일명)
hello-html-world : kebab case (URL-폴더, html - class/id 이름)
helloHtmlWorld : camel case (js - 변수/함수 이름)
HelloHtmlWorld : Pascal case (js - Class 이름)
```

# CSS

## CSS Introduction / Syntax

- Cascading Style Sheet
- 여러 개의 html 파일에 공통 적용

```
Selector(선택자){
  CSS property:value;
  CSS property:value;
  CSS property:value;
}
```

## CSS Selector

- simple selector
  - tag
  - class
  - id

```
tag 선택자

h1{
  color:red;
}

class 선택자

.class-name{
  color:blue;
}

id 선택자

#id-name{
  color:green;
}
```

## Cascading(캐스캐이딩) 규칙

- 동일한 대상에 동일한 CSS property가 여러번 적용될 때 앞에서 적용된
  스타일 위에 나중에 적용된 스타일 덮어 쓰기됨
- 제일 나중에 적용된 스타일로 최종 반영됨
- 우선 순위
  - id : 100
  - class : 10
  - tag : 1

## CSS Property

- Contents styling

  - Text Contents
  - Multimedia Contents

- Structure Styling => layout

## Text Contents Styling

### Text Color : 텍스트 색

- color
- red, #1A3DFF, rgb(255,0,100)

### Text Align : 텍스트 정렬

- text-align
- left, right, center, justify

### Text Decoration : 텍스트 라인

- text-decoration
- overline, line-through, underline, none

### Text Indent : 텍스트 들여쓰기

- text-indent
- px 값으로 지정

### Letter Spacing : 자간

- letter-spacing
- px 값으로 지정
  - 양수, 음수값 모두 사용 가능

### Line Height : 줄 높이

- line-height
- px값 지정, 배수값 표현

### White Space : 줄바꿈 지정

- white-space
- wrap(기본), nowrap

### Font Family : 글꼴 종류

- font-family
- 고딕체(sans-serif), 명조체(serif)
- 고딕체 : 본고딕(Noto sans), 나눔바른고딕
- 웹폰트
  - 로컬 : woff 폰트 형식 사용
  - CDN 서비스 : 구글 폰트

### Font Style : 기울임꼴

- font-style
- italic

### Font Weight : 글꼴 굵기

- font-weight
- normal, bold
- 100,200,300,400,500,600,700,800,900

### Font Size : 글꼴 크기

- font-size
- px 단위 지정
- 브라우저의 기본크기 : 16px

### List Style

- list-style-type : 목록 기호 스타일 지정
- none : 목록 기호 삭제

### Table Style

- border-collapse : 테이블 테두리 틈 상태 지정
- collapse : 틈 합친 상태

### Link Style

- 4가지 상태 구분
  - a:link : 기본 상태
  - a:visited : 방문한 상태
  - a:hover : 마우스 갖다댄 상태
  - a:active : 마우스 버튼 누른 상태

## Layout

### Box Model

- content => width/height : 너비/높이
- padding : 안쪽여백
- border : 테두리
- margin : 바깥여백
- content, padding, border : 박스 영역에 포함

#### content(width/height)

- 박스 기본성질(block/inline)

- block 요소 width/height
  - 크기 지정 안했을 때
    - 너비 : 부모요소 영역 너비만큼 채워짐
    - 높이 : 자식요소 영역 높이만큼 지정됨
  - px 지정
    - 기본 성질에 상관없이 고정 크기
  - % 지정
    - 너비 : 부모요소 영역 기준으로 일정 비율만큼 지정
           =>부모요소 너비가 변경되면 실시간으로 같이 변함
    - 높이 : 기본 성질로 적용 => % 단위 적용되지 않음

#### padding

- 4방향 각각 독립적으로 적용(4개중 일부만 사용)
  - padding-top
  - padding-right
  - padding-bottom
  - padding-left

- 축약 표현(4방향 동시적용 값을 따로 적용)
  - 값 4개 : 각 방향 각각 적용
  - 값 3개 : 위-아래 각각 적용, 왼쪽-오른쪽 공통적용
  - 값 2개 : 위-아래, 왼쪽-오른쪽 각각 공통적용
  - 값 1개 : 4방향 모두 공통 적용

#### margin

- padding과 사용방법이 같음

- margin collapse
  - 위-아래 세로 방향으로 인접해 있을 때 사이 여백이 상쇄되는 현상
  - 위-아래 여백이 모두 적용되어 있을 때 둘 중 큰 쪽만 적용됨
  - 위 또는 아래 박스 한쪽에만 margin 적용

#### border

- border:1px(굵기) solid(종류) red(색);

- border-top
- border-right
- border-bottom
- border-left

#### box 크기 계산

- content(width/height) + padding + border [+ margin]

```
Ex)
width:300px, padding:20px(4방향), border:1px(4방향);
=> 전체크기 : 300 + 40 + 2 = 342

전체크기 : 400px, padding:20px(4), border:1px(4), width:?
=> 400 - 40 - 2 = 358
```

- box-sizing
  - content-box : content 기준(기본)
  - border-box : box 기준

```
Ex)
width:300px, padding:20px(4), border:1px(4)
box-sizing:border-box;
=> 전체크기 : 300px
```

#### inline 요소에 box model 적용

- content(width/height) : 적용 안됨
- padding : 적용됨
- border : 적용됨
- margin : 일부 적용(좌우적용)

=> inline 요소는 레이아웃 구성에 사용할 수 없음

#### display 속성

- 박스의 화면 표시 속성을 변경
- display
  - block
  - inline
  - inline-block : 박스모델 적용, 한 줄에 나란히 표시
  - none

