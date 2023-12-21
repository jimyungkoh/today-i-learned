# TIL 7일차(20231221) HTML / CSS 학습 마무리

![](https://i.imgur.com/c8V6EG7.png)

# :root , html, * 선택자 비교하기

|선택자|설명|주 사용 목적|
|---|---|---|
|`:root`|문서 트리의 루트 요소를 선택합니다.|CSS 변수를 전역적으로 정의하는 데 사용됩니다.|
|`html`|HTML 문서의 `<html>` 요소를 직접 선택합니다.|`<html>` 요소에 대한 스타일을 정의하는 데 사용됩니다.|
|`*`|문서의 모든 요소를 선택합니다.|문서의 모든 요소에 스타일을 적용하는 데 사용됩니다.|


## 우선순위
1. `:root` (가장 높음)
2. `html`
3. `*` (가장 낮음)

## `:root` (루트) 선택자
* `:root` 선택자는 문서 트리의 루트 요소를 선택합니다. HTML에서는 `<html>` 요소와 동일합니다.
  -> 문서가 html만 있는 것은 아니기 때문에 `:root` != `html`
* 주로 CSS 변수(사용자 정의 속성)를 전역적으로 정의하는 데 사용됩니다.
* CSS 변수를 `:root`에 정의하면, 전체 문서에서 이 변수들을 사용할 수 있습니다.
```css
:root {
  --main-color: #333;
}
```
## `html` 선택자
* `html` 선택자는 HTML 문서의 루트 요소인 `<html>` 태그를 직접 선택합니다.
* `:root`와 기능적으로 거의 동일하지만, `:root`는 CSS의 가상 클래스이며, `html`은 구체적인 요소를 지칭합니다.
* `html` 선택자는 주로 문서 전체에 적용되는 기본 스타일을 설정하는 데 사용됩니다.
* `html` 선택자는 `:root`보다 구체적이지 않기 때문에, 동일한 속성에 대해 `:root`와 `html` 선택자가 충돌할 경우 `:root`의 스타일이 우선 적용됩니다.

## `*`(전역) 선택자
* `*` 선택자는 문서의 모든 요소를 선택합니다.
* 이 선택자는 문서 내의 모든 요소에 스타일을 일괄적으로 적용하고자 할 때 사용됩니다.
```css
* {
  margin: 0;
  padding: 0;
}
```
# [css 변수](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)

## 개념
CSS 변수(사용자 지정 속성, 종속 변수)는 CSS 저작자가 정의하는 개체로, 문서 전반적으로 재사용할 임의의 값을 담습니다.

## 특징

* **재사용성**: 한 번 정의된 변수는 CSS 파일 전체에서 재사용할 수 있어 코드의 중복을 줄일 수 있습니다.
* **유지보수**: 디자인 요소를 변경할 때 변수 값만 업데이트하면, 해당 변수를 사용하는 모든 곳에 자동으로 적용됩니다.
* **읽기 쉬움**: 변수 이름을 의미 있게 지정하면, 코드의 가독성이 향상됩니다.

## 사용법
### 정의
```css
:root {
  --main-color: #4CAF50;
  --accent-color: #FFC107;
}

```
### 사용
```css
body {
  background-color: var(--main-color);
  color: var(--accent-color);
}
```
# SVG?

SVG(Scalable Vector Graphics)는 XML 기반의 벡터 이미지 포맷입니다.

SVG는 주로 로고, 아이콘, 단순한 그래픽 및 애니메이션 등을 웹 페이지에 표현하기 위해 사용됩니다.

## 특징
1. **벡터 기반**: SVG는 벡터 기반의 이미지 포맷으로, 점, 선, 곡선 등의 수학적 형태로 이미지를 표현합니다. 이로 인해 확대하거나 축소해도 이미지의 품질이 유지됩니다.
2. **XML 형식**: SVG 파일은 XML 형식으로 작성되며, HTML과 유사한 구조를 가집니다. 이 때문에 웹 브라우저에서 쉽게 렌더링하고 조작할 수 있습니다.
3. **스타일링과 스크립팅**: CSS를 사용하여 스타일링할 수 있으며, JavaScript를 통해 동적으로 조작하거나 애니메이션을 적용할 수 있습니다.
4. **접근성**: 텍스트 기반 포맷이기 때문에 검색 엔진 최적화(SEO)에 유리하며, 스크린 리더와 같은 보조 기술에도 잘 호환됩니다.
5. **DOM의 일부**: SVG 요소는 HTML 문서의 DOM(Document Object Model)의 일부로 취급되어, DOM API를 통해 조작할 수 있습니다.

## 장점
* 해상도 독립성
* 파일 크기
* 편집 용이성
* 인터랙티브
* 애니메이션

# label?
`<label>` 요소는 HTML에서 사용자 인터페이스 항목의 레이블을 정의할 때 사용됩니다.

주로 `<input>` 요소와 같은 폼 컨트롤에 레이블을 제공하는 데 사용되며, 사용자의 접근성과 폼의 사용성을 향상시키는 데 중요한 역할을 합니다.

## 특징
### 연결성
`<label>` 요소는 특정 폼 요소와 연결될 수 있습니다.

label과 폼 요소 간 연결은 두 가지 방식을 통해 가능합니다!

1. `for` 속성 사용: `for` 속성의 값은 연결하고자 하는 폼 요소의 `id` 속성 값과 일치해야 합니다.
```css
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

2. **레이블 내부에 폼 요소 포함**: 폼 요소를 `<label>` 태그 내부에 직접 배치함으로써 자동으로 연결됩니다.
```css
<label>
  Username:
  <input type="text" name="username">
</label>
```

### 접근성 향상
label은 스크린 리더와 같은 보조 기술을 사용하는 사용자에게 폼 요소의 목적을 명확하게 전달합니다.

### 사용자 인터랙션
사용자가 레이블을 클릭하면 연결된 폼 요소가 활성화됩니다.

이는 특히 모바일 환경에서 작은 체크박스나 라디오 버튼을 선택하기 어려울 때 유용합니다

### 스타일링
CSS를 사용하여 `<label>` 요소의 스타일을 커스터마이즈할 수 있습니다, 이를 통해 폼의 시각적 표현을 개선할 수 있습니다.

# CSS Transition과 Transformation

## CSS Transition

`transition`은 HTML 요소의 속성 변화가 일어날 때 그 변화를 시간에 따라 부드럽게 만드는 방법을 제공합니다. 즉, `transition`은 상태의 변화를 애니메이션으로 만들어줍니다.

예를 들어, 버튼에 마우스를 올렸을 때 색상이 점진적으로 변하는 효과를 주고 싶다면 `transition` 속성을 사용할 수 있습니다.

```css
button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: red;
}
```

이 코드는 버튼의 배경색이 파란색에서 빨간색으로 0.5초 동안 부드럽게 전환되는 효과를 만듭니다.

## CSS Transformation

`transform`은 HTML 요소의 모양, 크기, 위치, 회전 등을 변화시키는 데 사용됩니다. 이 속성은 요소의 형태를 직접 변형시키는 작업에 사용됩니다.

예를 들어, 요소를 회전시키거나, 크기를 조정하거나, 기울이는 등의 작업을 할 때 `transform` 속성을 사용합니다.

```css
div {
  transform: rotate(45deg);
}
```

이 코드는 `div` 요소를 45도 회전시키는 효과를 만듭니다.

## CSS Transition과 Transformation 함께 사용하기
`transition`과 `transform`은 함께 사용될 때 매우 강력합니다. 예를 들어, 사용자가 요소 위로 마우스를 가져갔을 때 요소가 회전하고 확대되는 효과를 만들 수 있습니다.

```css
div {
  transition: transform 0.5s ease;
  transform: scale(1);
}

div:hover {
  transform: scale(1.5) rotate(10deg);
}
```

이 예시에서는 `div` 요소가 마우스 오버 시 1.5배로 확대되고 10도 회전하는 효과를 부드럽게 보여줍니다.

`transition`과 `transform`은 웹 페이지에 다이나믹한 인터랙티브 효과를 추가하는 데 유용하게 사용됩니다.
