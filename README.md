# TIL 8일차(20231222) 자바스크립트 기본 1편
![](https://i.imgur.com/BZ9NILx.jpg)
# 자바스크립트란?
> 브라우저에 의해 실행될 수 있는 유일한 프로그래밍 언어

# HTML, CSS, JavaScript 비교
|`HTML`|`CSS`|`JavaScript`|
|---|---|---|
|HTML 문서의 구조와 의미 정의|HTML 요소와 페이지 콘텐츠 스타일링|페이지를 동적으로 변경|

# 외부에서 정의한 JavaScript HTML에서 사용하기

```html
...
<head>
	<script src="file-name.js"></script>
</head>
```

# 변수와 상수
변수: var, let
상수: const

|특성|`var`|`const`|`let`|
|---|---|---|---|
|스코프|함수 스코프|블록 스코프|블록 스코프|
|호이스팅|됨|되지 않음|되지 않음|
|재할당 가능|가능|불가능|가능|
|같은 스코프 내 재선언|가능|불가능|불가능|

## 호이스팅이란?

인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스 또는 임포트(import)의 선언문을 해당 범위의 맨 위로 이동시키는 과정입니다!

### 예시 코드
아래 이미지와 같이 var 변수인 welcomMessage는 호이스팅을 지원해서 console.log에서 오류를 잡아내지 않지만, let 변수인 welcome은 console.log에서 오류가 생깁니다.

![](https://i.imgur.com/VsnyFcx.png)

# 세미콜론(`;`)?
자바스크립트는 줄 바꿈이 있으면 세미콜론(`;`)을 자동 삽입합니다.

일반적으로 줄 바꿈은 세미콜론을 의미하지만, 항상 그런 것은 아닙니다.

```javascript
console.log("Hello " +  
    "World!"  
);
```

아래처럼 여러 줄에 걸쳐서 표현식을 작성하는 경우 '불완전한 표현식'이므로 세미콜론 자동 삽입이 일어나지 않습니다.

하지만, '세미콜론이 필요하지만, 자바스크립트가 놓치는 경우'도 있습니다. 아래 예시처럼 말이죠~!

자바스크립트 같은 스크립트 언어는 컴파일 타임에 문제가 생기지 않고, 런타임에 문제가 생기기 때문에 이런 오류가 복잡한 프로젝트에서 생기면 정말 힘들 것 같아요 😿

세미콜론 사용을 습관화합시다 😃

```javascript
/*  
* [], (), /, +, -로 시작하는 줄은 이전 줄과 연결될 수 있으므로,  
*   이전 줄에 세미콜론이 없으면 오류가 발생할 수 있습니다.  
* */  
const x = 5  
[1, 2, 3].forEach(n => console.log(n))
```
# 자바스크립트 자료형

## 원시 자료형
원시 자료형은 한번에 하나의 값만 가질 수 있는 자료형입니다.

하나의 고정된 저장 공간을 이용합니다.

### 종류
* null
* undefined
* boolean
* string
* number
* bigint
* symbol
## 참조 자료형
참조 자료형은 한번에 여러 개의 값을 가질 수 있는 자료형입니다.

여러 개의 고정되지 않은 동적 공간을 사용합니다.

* Object
* Array
* Function

## [널 병합 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

**널 병합 연산자 (`??`)** 는 왼쪽 피연산자가 [null](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/null) 또는 [undefined](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

```javascript
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
/* 코드에서 `0`은 `null`이나 `undefined`가 아니므로, 
	`baz` 변수에는 `0`이 할당됨 */
```

# 함수
## 콜백함수
```javascript
const checkMood = (mood, goodCallback, badCallback)  
{  
    if (mood === "good") goodCallback();  
    else badCallback();  
}  
  
const cry = () => console.log("ACTION :: CRY");  
const sing = () => console.log("ACTION :: SING");  
const dance = () => console.log("ACTION :: DANCE");  
  
checkMood("sad", sing, cry);
```

# 객체
## 객체를 생성하는 두 가지 방법
```javascript
/* 방법 1: 객체 생성자 방식 */
let person = new Object();

/* 방법 2: 객체 리터럴 방식 */
let person = {};
```

## 객체 프로퍼티?
```javascript
let person = {  
        key: "value", // <= 객체 프로퍼티(멤버)  
        say: function () {  
            console.log(`안녕 나는 ${this.key}`)  
        }  
        , // <= 객체 프로퍼티(함수)  
    };
```

### 객체 프로퍼티 접근법
```javascript
// 점 표기법
concole.log(person.key); 
person.say();

// 괄호 표기법
concole.log(person["key"]); 
person["say"]();
```

### 객체 프로퍼티 값 할당
```javascript
// 점 표기법을 이용한 할당
person.location = "한국";

// 괄호 표기법을 이용한 할당
person["gender"] = "남성";
```

### 객체 프로퍼티 제거
```javascript
// 점 표기법을 이용한 삭제 v1
delete person.age;

// 점 표기법을 이용한 삭제 v2
//    값이 메모리에서 지워져서 v1보다 나은 방식 
person.age = null;

// 괄호 표기법을 이용한 삭제
delete person["age"];

// 괄호 표기법을 이용한 삭제 v2
//    값이 메모리에서 지워져서 v1보다 나은 방식
person["age"] = null;
```

## 전역 객체
* 브라우저 환경에서는 전역 객체를 `window`, 노드 js 환경에서는 `global`이라고 부릅니다.

### window (브라우저 환경)
* `window` 객체는 브라우저의 창을 나타내며, 브라우저에서 실행되는 JavaScript의 전역 객체입니다.
* 브라우저 환경에서 전역 변수와 함수는 기본적으로 `window` 객체의 속성이 됩니다.

### global (Node.js 환경)
* `global` 객체는 Node.js 환경에서의 전역 객체입니다.
* Node.js는 서버 사이드 JavaScript 실행 환경으로, 브라우저와는 다른 종류의 API와 기능을 제공합니다.
* Node.js에서도 전역 변수와 함수는 `global` 객체의 속성으로 취급됩니다.

# DOM(Document Object Model)
DOM은 '문서 객체 모델(Document Object Model)'의 약자로 TML, XML 문서의 프로그래밍 인터페이스입니다.

DOM은
* 문서의 구조화된 표현을 제공합니다.
* 프로그래밍 언어가 DOM 구조 접근을 통해 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕습니다.

![](https://i.imgur.com/XERrSca.png)
*출처: [【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프](https://www.udemy.com/share/10694e3@jiflikM97neqVdzn_C6e4DmAtYKYglo5gZ58wroteFDUC2i_KfU5BKvxbIkb2xoy2g==/)*
## DOM 트리?
![](https://i.imgur.com/qWkzvs7.png)

## DOM 요소를 선택하는 두 가지 접근 방식

예를 들어, `document.body.children[0].firstChild`와 `document.querySelector()` 방식이 있습니다. 어떤 차이가 있을까요?!?!?

|기준|`document.body.children[0].firstChild`|`document.querySelector()`|
|---|---|---|
|**접근 방식**|직접적인 자식 요소 접근|CSS 선택자 기반|
|**유연성**|인덱스 기반으로 정확한 위치 지정 필요|다양한 CSS 선택자 사용으로 더 유연|
|**반환하는 노드 타입**|요소, 텍스트, 주석 노드 등 모든 종류의 첫 번째 자식 노드|오직 요소 노드만 반환|
|**문서 구조 의존도**|문서의 구조를 정확히 알아야 함|문서 구조에 덜 의존적|
|**적합한 사용 상황**|문서의 구조와 정확한 요소 위치를 알고 있을 때|문서의 구조가 자주 변경되거나 복잡할 때, 특정 클래스나 ID를 가진 요소를 선택할 때|

# 배열
## 배열을 생성하는 방법
```javascript
// 배열 생성자 방식
let arr = new Array();

// 배열 리터럴 방식
let arr = [];
```

## 배열 요소 추가
```javascript
let arr = [1, 2, 3, 4, 5];

arr.push(6);
```

## 배열 길이
``` javascript
# 배열도 결국 객체임. => 객체 프로퍼티처럼 length 키에 길이 값 저장
arr.length;
```

# Truthy와 Falsy
## Falsy
https://developer.mozilla.org/ko/docs/Glossary/Falsy

|값|타입|설명|
|---|---|---|
|[null](https://developer.mozilla.org/ko/docs/Glossary/Null)|Null|[`null`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/null) 키워드는 아무런 값도 없음을 의미합니다.|
|[undefined](https://developer.mozilla.org/ko/docs/Glossary/Undefined)|Undefined|[`undefined`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)는 원시값을 의미합니다.|
|`false`|Boolean|[`false` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar "Currently only available in English (US)") 키워드.|
|[NaN](https://developer.mozilla.org/ko/docs/Glossary/NaN)|Number|[`NaN`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)은 숫자가 아님을 의미합니다.|
|`0`|Number|The [`Number`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number) 0, `0.0`, `0x0` 등도 포함합니다.|
|`-0`|Number|The [`Number`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number) 음수 0, `-0.0`, `-0x0` 등도 포함합니다.|
|`0n`|BigInt|The [`BigInt`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 0, `0x0n` 등도 포함합니다. Note that there is no [`BigInt`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt)에 음수 0가 없다는 것에 주목하세요. `0n`의 음수 0은 `0n`입니다.|
|`""`|String|비어있는 [string](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 값, also `''` 및 ` `` `도 포함합니다..|
|[`document.all`](https://developer.mozilla.org/ko/docs/Web/API/Document/all)|Object|JavaScript의 유일한 거짓같은 객체는 내장 [`document.all`](https://developer.mozilla.org/ko/docs/Web/API/Document/all)입니다.|
## Truthy
https://developer.mozilla.org/ko/docs/Glossary/Truthy

Falsy에 해당하지 않는 값 모두

# 참고자료
[【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프](https://www.udemy.com/share/10694e3@jiflikM97neqVdzn_C6e4DmAtYKYglo5gZ58wroteFDUC2i_KfU5BKvxbIkb2xoy2g==/)
[한입 크기로 잘라 먹는 리액트(React.js)](https://www.udemy.com/share/105Ixm3@qVjvTSbDLyE4XoSqTn-E6v9Ylsr6xc1dRRLwpQ6dBDg0yev89ZuSeJCwSrCIuRqtnQ==/)