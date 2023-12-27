# TIL 9일차(20231226) 자바스크립트 기본 2편

![](https://i.imgur.com/yNUD9Zr.png)

# DOM 더 알아보기

## DOM Tree를 구성하는 네 종류의 노드

![](https://i.imgur.com/1dWvYt5.png)

* 문서 노드(Document Node)
    * 트리 최상위에 존재하는 노드
    * DOM tree에 접근하기 위한 시작점(entry point)
    * 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.
* 요소 노드(Element Node)
    * HTML 요소를 표현한다.
    * HTML 요소는 중첩에 의해 부자 관계를 형성하며 이 부자 관계를 통해 정보를 구조화
    * 요소 노드는 문서의 구조를 서술
    * 어트리뷰트, 텍스트 노드에 접근하려면 요소 노드를 찾아서 접근해야 함
    * 모든 요소 노드는 요소별 특성을 표현하기 위해 HTMLElement 객체를 상속한 객체로 구성* 어트리뷰트 노드(Attribute Node)
    * HTML 요소의 어트리뷰트를 표현
    * 요소의 자식이 아닌 일부로 표현됨
* 텍스트 노드(Text Node)
    * HTML 요소의 텍스트를 표현한다.
    * 요소 노드의 자식이며 자식 노드를 가질 수 없으므로 DOM tree의 리프 노드(Leaf Node)라고 할 수 있다.

![](https://i.imgur.com/ewkKHUT.png)
*출처: https://poiemaweb.com/js-dom*

## 요소를 탐색하는 다양한 방법(DOM 탐색 프로퍼티, getElementX, querySelectorX)

### getElementX와 querySelectorX

![](https://i.imgur.com/qL2xbgE.png)

두 방식의 자이점은 아래와 같습니다.

- **용도**: `getElementById`는 ID를 기반으로 요소를 찾는 데 특화되어 있으며, `querySelector`는 다양한 CSS 선택자를 사용하여 요소를 찾을 수 있.
- **성능**: `getElementById`는 일반적으로 `querySelector`보다 빠르다
- **유연성**: `querySelector`는 다양한 선택자를 사용할 수 있어 더 유연하지만, `getElementById`는 오직 ID를 기반으로만 작동한다.
- **호환성**: `getElementById`는 모든 브라우저에서 널리 지원되는 반면, `querySelector`는 구형 브라우저에서는 지원되지 않을 수 있다.

전자는 id 별로 요소를 가져오는 데 초점을 맞추지만, 후자는 css 선택자가 id, class 등으로 정의되어 있지 않으므로 HTML 요소를 통해 선택할 수 있습니다!

## HTML 요소 삽입

### 1. 새로운 엘리먼트 만들기

```javascript
let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "구글로 이동하기";
```

### 2. 새로운 엘리먼트가 담길 부모 엘리먼트 가져오기

```javascript
let firstParagraph = document.querySelector('p');
```

### 3. 부모 엘리먼트에 새로운 엘리먼트 추가하기

```javascript
firstParagraph.append(newAnchorElement);
```

## DOM 요소 삭제

### 1. 제거할 요소 선택하기

```javascript
let firstH1Element = document.querySelector("h1");
```

### 2. 제거하기!

방법 1.

```javascript
firstH1Element.remove();
```

방법 2. 인터넷 익스플로러와 같은 오래된 브라우저에서 요소를 삭제할 때 쓰는 방법

```javascript
firstH1Element.parentElenet.removeChild(firstH1Element);
```

## DOM 요소 이동하기

### 추가할 DOM 요소의 부모 요소 선택하고 부모 요소에 append!

```javascript
firstParagraph.parentElement.append(firstParagraph);
```

## innerHTML?

`textContent` 속성은 텍스트 내용만을 반환하며, HTML 요소는 해석되지 않습니다.
반면, `innerHTML`은 HTML 코드와 텍스트를 모두 포함할 수 있습니다.

textContent를 사용했을 때
![](https://i.imgur.com/i1ZD1Kx.png)

![](https://i.imgur.com/TD9kmBd.png)

innerHTML을 사용했을 때
![](https://i.imgur.com/SuKt9SH.png)
![](https://i.imgur.com/Lh0j82J.png)

# 이벤트

## 이벤트 핸들러와 이벤트 리스너

![](https://i.imgur.com/qGkclck.png)

## 이벤트 핸들러를 할당하는 세 가지 방법

1. HTML 속성을 이용한 할당 방식
    * HTML 요소의 속성으로 직접 이벤트 핸들러를 할당합니다.
    * 이 방식은 HTML과 자바스크립트 코드가 혼합되어 있어 유지보수가 어렵습니다.
   ```html
   <!--예시 코드-->
   <button onclick="alert('버튼이 클릭되었습니다!')">클릭하세요</button>
   ```
2. DOM 프로퍼티
    * 자바스크립트에서 DOM 요소의 프로퍼티로 이벤트 핸들러를 할당합니다.
    * 이 방식은 간단하고 직관적이지만, 한 요소에 하나의 이벤트 핸들러만 할당할 수 있습니다.
   ```javascript
   document.getElementById('myButton').onclick = function() {
     alert('버튼이 클릭되었습니다!');
   };
   ``` 
3. 메서드(권장)
    * `addEventListener` 메서드를 사용하여 이벤트 리스너를 추가합니다.
    * 또한, `removeEventListener`를 사용하여 이벤트 리스너를 제거할 수 있습니다.
    * 이 방식은 가장 유연하고, 한 요소에 여러 이벤트 핸들러를 할당할 수 있습니다.

## 이벤트 리스너 추가하는 법

`element.addEventListener('click', 콜백 함수)`

```javascript
let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log("Paragraph clicked!");
}

// paragraphElement.addEventListener('click', 콜백 함수);
paragraphElement.addEventListener('click', changeParagraphText);
```

## callbackFunction()이 아닌 callbackFunction

addEventListener에 콜백 함수를 전달할 때 function()와 같이 괄호를 덧붙이는 것은 함수 호출을 의미합니다.

즉, 위 예시에서 `changeParagraphText()`를 addEventListener의 두번째 인자값으로 넣는 것은 changeParagraphText 함수가 리턴 값이 없는 void 함수이기 때문에
undefined가 반환되고 이벤트 핸들링 단계로 넘어가지 못한채 함수가 제 기능을 하지 못하게 됩니다.

반면, `changeParagraphText`를 addEventListener의 두번째 인자값으로 넣는 것은 addEventListener가 `changeParagraphText` 함수를 참조만 하고 있음을
의미하며, 이벤트가 발생할 때 이밴트 핸들러가 실행된다.

따라서, 이벤트 핸들러를 전달할 때는 괄호를 붙이지 말고 전달하도록 합시다 ☺

# 기타 배운 지식

## console.dir vs console.log

![](https://i.imgur.com/nBX4wq3.png)

## 동등 연산자와 일치 연산자 비교

![](https://i.imgur.com/f0EiKx6.png)

## defer와 async 이해하기

[defer, async 스크립트](https://ko.javascript.info/script-async-defer)
![](https://i.imgur.com/4bu0k2H.png)

## 전역 변수와 전역 프로퍼티?

![](https://i.imgur.com/LANldfi.png)
[IIFE에 대해서 알아보기](https://developer.mozilla.org/ko/docs/Glossary/IIFE)

# 참고자료

[【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프](https://www.udemy.com/share/10694e3@jiflikM97neqVdzn_C6e4DmAtYKYglo5gZ58wroteFDUC2i_KfU5BKvxbIkb2xoy2g==/)

[문서 객체 모델(Document Object Model)](https://poiemaweb.com/js-dom)

[모던 자바스크립트: defer, async 스크립트](https://ko.javascript.info/script-async-defer)