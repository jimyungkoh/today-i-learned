# step1: 프로젝트 설정

## html 기본 구조 생성

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Travel Goals</title>
</head>
<body>

</body>
</html>
```

## styles.css 파일 생성

## html에 css 파일, 폰트 가져오기

```html
...
<head>
    ...
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Oleo+Script:wght@700&family=Quicksand:wght@300;500;700&display=swap"
          rel="stylesheet"/>
    <link rel="stylesheet" href="styles.css">
    ...
</head>
<body>
</body>
</html>
```

# step2: 랜딩 페이지 구조 만들기

## 시멘틱(Semantics)?

[시멘틱](https://developer.mozilla.org/ko/docs/Glossary/Semantics#%EC%9D%98%EB%AF%B8%EB%A1%A0%EC%A0%81_%EC%9A%94%EC%86%8Celement%EB%93%A4)
은 코드 조각의 의미를 나타냅니다.

> "HTML 엘리먼트가 가진 목적이나 의미는 무엇인가?"

처럼 말이죠.

## HTML 시멘틱

예를 들어, HTML에서는 `<h1>`은 시멘틱 요소입니다.

h1 태그는 '페이지에서 최상위 제목'인 텍스트를 감싸는 의미를 가집니다.

의미론적 요소는 백 여개 씩이나 있으므로, 여기 소개되지 않은 요소는

[MDN Semantics 섹션](https://developer.mozilla.org/ko/docs/Glossary/Semantics#의미론적_요소element들)을 참고하세요!

* header
    * 헤더 요소는 페이지 소개 및 탐색에 도움을 주는 콘텐츠를 표현합니다.
* nav
    * 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다.
* section
    * HTML 문서의 특정 구역을 나타내며, 더 적합한 의미를 가진 요소가 없을 때에도 사용합니다.
* article
    * 문서, 페이지, 애플리케이션 또는 사이트 내에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구역입니다.
    * 예시로 게시판, 블로그 글, 뉴스 기사 등이 있습니다.
* aside
    * 문서의 주요 내용과 간접적으로 연관된 부분을 나타냅니다.
    * 예시로 사이드바가 있습니다!
* footer
    * 푸터는 가장 아래에 들어가는 구역 콘텐츠를 나타냅니다.
    * 푸터에는 저작권 정보, 웹 페이지를 제공하는 회사, 관련 문서 등이 들어갑니다!

## 시멘틱 웹 hands-on

step1에서 만들었던 index.html 파일의 body 태그에 아래 내용을 입력합니다.

```html
<!doctype html>
<html lang="en">
<head>
    ...
</head>
<body>
<header>
    <nav></nav>
</header>
<main>
    <section></section>
    <section></section>
</main>
<footer></footer>
</body>
```

위 코드를 그림으로 보면 다음과 같습니다!

![시멘틱-웹-스켈레톤](https://i.imgur.com/HlFnQcv.png)

# step3: 페이지 로고 추가

## index.html 수정

```html
<!doctype html>
<html lang="en">
<head>
    ...
    <!-- 모든 페이지에서 사용할 shared.css 생성 및 로드-->
    <link rel="stylesheet" href="shared.css">
    ...
</head>
<body>
<header>
    <!-- shared.css에 page-logo 정의 및 로고 링크 삽입 -->
    <div id="page-logo">
        <a href="/index.html">Travel Goals</a>
    </div>
    ...
</header>
...
</body>
</html>
```

## shared.css 파일 생성

```css
body {
    font-family: "Quicksand", sans-serif;
    margin: 0;
}

/* page-logo id의 앵커 태크에 적용될 스타일 속성 */
#page-logo a {
    padding: 10px;
    font-family: "Oleo Script", sans-serif;
    color: dodgerblue;
    font-size: 50px;
    text-decoration: none;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px darkgray;
}
```

# 참고자료

[【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프](https://www.udemy.com/share/10694e3@jiflikM97neqVdzn_C6e4DmAtYKYglo5gZ58wroteFDUC2i_KfU5BKvxbIkb2xoy2g==/)

[MDN - Semantics](https://developer.mozilla.org/ko/docs/Glossary/Semantics#의미론적_요소element들)
