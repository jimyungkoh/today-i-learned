# TIL 6일차(20231220) 새롭게 배우게 된 CSS 지식들

![](https://i.imgur.com/jrqQzsY.png)

# 반응형 웹 디자인?

반응형 웹 디자인(Responsive Web Design, RWD)은 웹사이트가 다양한 장치와 화면 크기에 맞게 그 내용, 구조 및 시각적 요소를 자동으로 조정하는 웹 디자인 접근 방식입니다.

그리고 반응형 웹 디자인은 다음과 같은 특징을 가지고 있습니다.

1. **유연한 레이아웃**: 웹 페이지의 레이아웃은 고정된 픽셀 수치 대신 백분율이나 다른 상대적 단위를 사용하여 구축됩니다. 이렇게 함으로써 레이아웃은 다양한 화면 크기에 맞게 유연하게 확장되거나 축소될 수
   있습니다.

2. **유연한 이미지 및 미디어**: 이미지와 미디어 요소도 화면 크기에 따라 크기가 조정되어야 합니다. 이는 이미지가 너무 크거나 작아 보이는 것을 방지하고, 다양한 장치에서 콘텐츠가 적절하게 표시되도록 합니다.

3. **접근성과 사용성**: 반응형 웹 디자인은 단순히 크기 조정 이상의 것을 의미합니다. 모바일 장치에서의 터치 인터페이스, 데스크탑에서의 마우스 및 키보드 사용 등 다양한 상호작용 방식을 고려해야 합니다.

그리고 css에서 이러한 특징을 살리는 데 유용하게 활용할 수 있는 것이 미디어 쿼리입니다.

# 미디어 쿼리에 대하여,,

## 미디어 쿼리?

[MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries)에 따르면 미디어 쿼리란

* 지정한 규칙에 브라우저 및 장치 환경이 일치하는 경우에만 CSS를 적용할 수 있는 방법을 제공하는 것
* 뷰포트의 크기에 따라 서로 다른 레이아웃을 생성하는 것
* 실행 중인 환경에 대해서 다른 것들(터치, 마우스 등)을 감지하는 데에도 사용되는 것

입니다.

예시 코드를 통해 사용법을 익혀보아요!

## 미디어 쿼리 사용 방법

1. 화면 너비가 601 픽셀 이상일 때 body 색상을 'coral'로 바꾸기

```css
@media (min-width: 601px) {
    body {
        background-color: coral;
    }
}
```

2. 화면 너비가 600 픽셀 이하일 때 body 색상을 'lightblue'로 바꾸기

```css
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

3. 화면 너비가 600픽셀 이상 800픽셀 이하일 때 body 색상을 변경하기

```css
@media (min-width: 600px) and (max-width: 800px) {
    body {
        background-color: violet;
    }
}

```

## 미디어 쿼리 사용의 기준점?

![](https://i.imgur.com/SZZloCI.png)

## 미디어 쿼리 hands-on: 과제와 해결

강의에서는 아래 페이지에 대하여 다음과 같은 요구사항을 스스로 해결하는 과제가 있었습니다.

1. max width는 픽셀 기준으로 되어 있는데, 이것을 rem 단위로 바꾸세요. 기준 폰트는 16px입니다.
2. nav를 모바일 화면에서는 보이지 않도록 해야 합니다.
3. h1 폰트 사이즈를 모바일 화면에서는 1.5rem으로 설정하세요.

![](https://i.imgur.com/HtsuF7U.png)

````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>WebFood</title>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header id="main-header">
    ...
    <nav>
        <ul>
            <li>
                <a href="">Browse Meals</a>
            </li>
            <li>
                <a href="">My Orders</a>
            </li>
        </ul>
    </nav>
</header>
<main>
    <h1>Browse Our Delicious Meals</h1>
    ...
</main>
</body>
</html>
````

``` css
...
@media (max-width: 768px) {  
    #latest-products ul {  
        grid-template-columns: 100%;  
    }  
}
```

풀이 코드

```css
/* 1. 루트 글꼴 크기가 16px이므로 768 / 16 = 48rem */
@media (max-width: 48rem) {
    /* 2. 모바일 화면에서 네비게이션 바를 표시하지 않음 */
    header nav {
        display: none;
    }

    /* main의 h1 요소 1.5rem 처리
        -> 루트 글꼴 크기가 16px이라면, 24px가 됨 */
    main h1 {
        font-size: 1.5rem;
    }

    #latest-products ul {
        grid-template-columns: 100%;
    }
}
```

# 기타 배운 내용

## em, rem, %?

## grid 관련 개념 `fr`

CSS Grid 레이아웃에서 `fr` 단위는 "fraction"의 약자로, 그리드 컨테이너 내에서 사용 가능한 공간의 일정 비율을 나타냅니다.

### `fr` 단위의 장점

1. **반응형 디자인**: `fr` 단위는 그리드 레이아웃을 더 반응형으로 만들어 줍니다. 화면 크기가 변해도 각 트랙은 자동으로 비율에 맞게 조정됩니다.
2. **간결한 코드**: 복잡한 계산이나 고정된 크기 값 없이도 유연한 레이아웃을 쉽게 구현할 수 있습니다.

### `fr` 단위의 작동 방식

- **공간 분배**: `fr` 단위는 그리드 컨테이너 내의 남은 공간을 분배합니다. 예를 들어, 한 열에 `1fr`이 할당되고 다른 열에 `2fr`이 할당되면, 두 번째 열은 첫 번째 열의 두 배 크기를
  차지합니다.
- **유연성**: `fr` 단위는 유연한 크기 조정을 가능하게 합니다. 그리드 아이템들이 추가되거나 화면 크기가 변해도, 각 트랙은 할당된 `fr` 비율에 따라 크기가 조정됩니다.
- **다른 단위와의 조합**: `fr` 단위는 픽셀(px), 백분율(%) 등 다른 크기 단위와 함께 사용될 수 있습니다. 이를 통해 더 복잡하고 유연한 레이아웃을 설계할 수 있습니다.

### 예시 코드

```css
/* grid 컨테이너의 첫 번째 열은 사용 가능한 공간의 1/3을,
	두 번째 열은 2/3를 차지 */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
```

## HTML 프래그먼트?

HTML 프래그먼트(HTML Fragment)는 완전한 HTML 문서가 아닌, HTML의 일부분을 나타내는 코드 조각입니다.

더 자세하게 설명하자면, HTML 프래그먼트는 일반적으로 웹 페이지의 특정 부분을 나타내거나 JavaScript를 통해 동적으로 웹 페이지에 삽입될 수 있는 HTML 요소들의 집합을 말합니다.

| **단위**  | **설명**                           | **기준**       |
|---------|----------------------------------|--------------|
| **em**  | 부모 요소의 글꼴 크기에 상대적인 크기를 설정        | 부모 요소의 글꼴 크기 |
| **rem** | 루트 요소 (HTML)의 글꼴 크기에 상대적인 크기를 설정 | 루트 요소의 글꼴 크기 |
| **%**   | 부모 요소의 크기에 상대적인 비율로 크기를 설정       | 부모 요소의 크기    |

## 데스크톱 우선 디자인 vs 모바일 우선 디자인

|       | 데스크톱 우선 디자인  | 모바일 우선 디자인   |  
|-------|--------------|--------------|  
| 접근 방식 | 전통적 접근       | 기능적 접근       |  
| 대상    | 사무실 기반 고객    | 생활/미디어 관심 고객 |  
| 특징?   | 여러 기능이 들어간 웹 | 컨텐츠 우선       |  

## 의사 클래스(pseudo-class) ':target'

`:target` 의사 클래스는 현재 URL의 해시에 해당하는 ID를 가진 HTML 요소를 선택합니다.

`:target`은 단일 페이지 웹사이트나 문서에서 특정 섹션에 직접 링크할 때 유용하게 사용되는 선택자이기도 합니다.

아래는 사용 예시 코드입니다.

```css
...
#side-drawer {
    width: 100%;
    height: 100%;
    background-color: white;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
}

/* side-drawer 해시가 선택된다면,
	side-drawer의 display는 none에서 block으로 바꾼다. */
#side-drawer:target {
    display: block;
}

...
```

# 참고자료

[【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프](https://www.udemy.com/share/10694e3@jiflikM97neqVdzn_C6e4DmAtYKYglo5gZ58wroteFDUC2i_KfU5BKvxbIkb2xoy2g==/)
[MDN: 미디어 쿼리 초보자 안내서](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries)
[MDN: ':target'](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)