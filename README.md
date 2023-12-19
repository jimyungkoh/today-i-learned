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

# step4: 페이지 탐색(navigation 콘텐츠) 추가

## nav 내부 무순서 리스트 삽입

```
<!doctype html>
<html lang="en">
...
<body>
<header>
    ...
    <nav>
        <ul>
            <li><a href="/places.html">Destinations</a></li>
            <li><a href="">About</a></li>
        </ul>
    </nav>
</header>
...
</body>
</html>
```

## places.html 만들기

파일 생성만 하므로 생략하겠습니다.

## shared.css 수정

```css
body {
    ...
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#page-logo a {
    ...
}
```

# step5: header 내부 요소 정렬

헤더 내부에 있는 아래 요소들을 한 줄에 나란히 놓으면 어떨까요?

logo는 가장 왼쪽에, nav는 가장 오른쪽에 말이죠!

![](https://i.imgur.com/Tsy0XB4.png)

flex 박스를 사용하면 이것이 가능해집니다!

## display!! 넌 누구냐

> `display` 속성은 웹 페이지의 HTML 요소가 화면 상에서 어떻게 보여질지 결정하는 중요한 CSS 속성입니다.

display의 속성 값은 [여러 가지](https://developer.mozilla.org/en-US/docs/Web/CSS/display)가 있는데, 자주 사용되는 몇 가지 속성을 설명해 보도록 하겠습니다.

* block
    * 요소가 블록 레벨 박스를 생성합니다.
    * 블록 레벨 요소는 새로운 줄에서 시작하며, 가능한 전체 너비를 차지합니다 (예: `<div>`, `<p>`).
* inline
    * 요소가 인라인 박스를 생성합니다.
    * 인라인 요소는 새로운 줄을 시작하지 않으며, 필요한 만큼의 너비만 차지합니다 (예: `<span>`, `<a>`).
* inline-block
    * 요소는 인라인 박스처럼 배치되지만, 블록 레벨 박스처럼 너비와 높이를 가질 수 있습니다.
* flex
    * 이는 1차원 레이아웃 모델을 제공합니다.
    * 요소가 플렉스 컨테이너가 되어 자식 요소들을 플렉스 아이템으로 배치합니다.
* grid
    * 이는 2차원 레이아웃 모델을 제공합니다.
    * 요소가 그리드 컨테이너가 되어 자식 요소들을 그리드 아이템으로 배치합니다.
* none
    * 요소가 화면에 표시되지 않으며, 레이아웃에서 완전히 제거됩니다.

### display: flex는 1차원, grid는 2차원?

아래 그림을 통해서 flex는 왜 1차원이라 부르는지, grid는 왜 2차원이라 부르는지 한번에 이해할 수 있습니다.

grid는 아래 그림에서 볼 수 있듯이, 행(row), 열(column)을 구분해 양뱡향 배치를 할 수 있지만, 플렉스는 단방향 배치만 가능합니다!

![](https://i.imgur.com/VGLGKWp.png)
*출처: https://medium.com/@daniaherrera/getting-started-css-grid-vs-flexbox-b3012fce6476*

## header 내부 요소 정렬에 flex 박스 사용해 보기

우리의 목표는 한 줄에 logo와 nav 요소를 배치하는 것이므로 flex 박스로 충분히 목적을 달성할 수 있습니다.

방법은?!? 바로 logo와 nav 태그(요소)의 부모 태그에 `display: flex`를 설정하면 되는 것입니다!!!

![](https://i.imgur.com/SZjKo2k.png)

```css
/* shared.css */
...
header {
    display: flex;
}

...
```

이제, 한줄로 넣기는 성공했습니다!

![](https://i.imgur.com/ObxpZbX.png)

## flex box 내부 요소 정렬하기

### main axis(주 축)과 cross axis(교차 축)에 대한 이해

|    | main axis           | cross axis       |
|----|---------------------|------------------|
| 정의 | 아이템 배치의 기본 방향이 되는 축 | main axis의 수직인 축 |

아래 그림을 동해 main axis(주 축)을 row일 때와 column일 때 cross axis(교차 축)이 어떻게 결정되는지 직관적으로 이해할 수 있습니다.

참고로!! flex 박스의 flex-direction은 기본적으로 row 입니다.

![](https://i.imgur.com/BXhvreB.png)
*출처: https://medium.com/@omlondhe/all-about-rows-and-columns-in-flutter-18978f32c565*

축에 대해 공부하니 머리가 어지럽네요,,

![](https://i.imgur.com/MLaib4W.png)

### 수평 정렬과 수직 정렬에 대한 이해

수평 정렬과 수직 정렬에 관해 얘기하기 전에 축에 대해 먼저 설명한 이유는 축에 따라서 수평 정렬과 수직 정렬의 기준이 달라지기 때문입니다.

flex 박스를 기준으로 주 축에 따른 정렬 방법은 아래와 같습니다.

요약하면, justify는 주 축에, align는 교차 축에 영향을 미칩니다.

|                                           | 수평 방향 정렬        | 수직 방향 정렬        |
|-------------------------------------------|-----------------|-----------------|
| 주 축이 수평인 경우 <br>(flex-direction: row)     | justify-content | align-items     |
| 주 축이 수직인 경우 <br>( flex-direction: column) | align-items     | justify-content |

### 실전

처음에 제가 의도했던 건 'logo'와 'nav'를 양 끝쪽에 정렬하는 거였습니다.

`display: flex` 와 함께 어떤 코드를 넣어야 할지 감이 오시나요?

주 축이 수평인 경우(flex-direction: row)이므로 수평 방향 정렬에 사용되는 요소는 justify-content입니다!

추가로, 양 끝단에 logo와 nav를 배치하는 것이므로 space-between을 justify-content의 값으로 입력합니다.

```css
/* shared.css */
...
header {
    display: flex;
    justify-content: space-between;
}

...
```

justify-content가 가질 수 있는 값은 아래 링크를 참조했습니다!

[MDN: justify-content](https://developer.mozilla.org/ko/docs/Web/CSS/justify-content)



# 


# 참고자료

[【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프](https://www.udemy.com/share/10694e3@jiflikM97neqVdzn_C6e4DmAtYKYglo5gZ58wroteFDUC2i_KfU5BKvxbIkb2xoy2g==/)

[MDN - Semantics](https://developer.mozilla.org/ko/docs/Glossary/Semantics#의미론적_요소element들)

[MDN: justify-content](https://developer.mozilla.org/ko/docs/Web/CSS/justify-content)
