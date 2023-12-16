# TIL 1일차(20231213) - 무엇이 웹 페이지를 구성하고 움직이게 만드는가

# 웹 페이지의 구성요소
웹 페이지는 HTML, CSS, JavaScript로만 구성됩니다.
## HTML
HTML은 HyperText Markup Language의 약자로, 네트워크로 연결된 웹 페이지에서 문서를 공유하기 위해 만들어진 체계입니다.

HTMl은 웹 페이지를 작성하기 위한 약속이며, 태그를 통해 웹 페이지에서 보여질 내용을 나타내게 됩니다.

그런데, HTML 만으로는 폰트 색상, 폰트 패밀리(글꼴), HTML 요소 배치를 할 수 없습니다!

이때 필요한 것이 CSS입니다.

### HTML 요소?
일단, HTML의 요소는 엄청 많습니다.

따라서, 열거하는 것보다 HTML 요소는 어떻게 구성되어 있는지에 집중해 설명하겠습니다!

[MDN HTML 요소 참고서](https://developer.mozilla.org/ko/docs/Web/HTML/Element)를 통해 HTML의 요소를 전부 확인하실 수 있습니다.

웹 브라우저는 HTML 문서에서 태그를 읽고 내용을 어떻게 표현할지 결정합니다.

일반적인 태그는 아래와 같이 구성됩니다.
![](https://velog.velcdn.com/images/intellik/post/56a365d2-23f8-4a29-b3e6-cb91a04f0a25/image.png)
* Element Name: HTML 요소의 이름입니다. 예를 들어, p 태그는 브라우저에 웹 페이지 영역의 단락을 표시하고, div 태그는 웹 페이지에 다양한 요소들이 들어갈 '박스(영역)'을 만듭니다.
* Opening Tag: 브라우저에 특정 HTML 요소가 시작됨을 알립니다.
* Element Content: HTML 요소의 내용을 입력합니다. 브라우저는 HTML 요소에 맞추어 내용을 표시합니다! 웹 사이트의 방문자는 여기 들어간 내용을 보는 것이구요!
* Closing Tag: 브라우저에 특정 HTML 요소가 시작됨을 알립니다.

## CSS
CSS는 Cascading Style Sheets의 약자로, 웹 사이트의 내용을 '의도한대로 표현하기 위한 언어'입니다.

CSS를 이용해 글자 색상, 그림자 효과, 그라데이션 효과, 배치 등을 개발자의 의도대로 설계할 수 있으며, 이를 통해 웹 방문자는 예쁜 웹 사이트를 마주하게 되는 것입니다!

![aha](https://velog.velcdn.com/images/intellik/post/6d635696-ed73-4f2e-ab67-962d9eacc95c/image.png)

하지만, HTML과 CSS로만 이루어진 사이트는 사용자와 상호작용할 수 없습니다.

## JavaScript
사용자와 상호작용하는 웹을 만들기 위해서는!! JavaScript가 필요합니다.

예를 들어, 로그인 한 사용자에게는 로그아웃 버튼을 표시할 수 있어야 하고 로그아웃한 사용자에게는 로그인 버튼을 표시하는 것처럼요!

구글과 같은 현대적인 웹 사이트는 HTML, CSS와 JavaScript를 함께 사용하고 있는 것을 볼 수 개발자 도구를 통해 확인할 수 있습니다.
![](https://velog.velcdn.com/images/intellik/post/06769c39-ed15-4cd6-9869-f65c944dd8bb/image.png)


# WS와 WAS 관점에서 본 웹 사이트의 동작 방식
우리가 웹 브라우저를 통해 웹 사이트에 방문하게 되면 어떤 일이 일어날까요?

클라이언트(고객)이 서버(회사)와 상호작용하는 과정을 설명하는 데에는 정말 많은 관점에서 이야기할 수 있지만, 저의 경우 **웹 서버와 웹 애플리케이션 서버의 관점**에서 설명해보도록 하겠습니다.

웹 브라우저에서 클라이언트가 웹 사이트에 접속해 웹 사이트에 데이터를 입력하면, 아래와 같은 방식으로 요청과 응답이 처리됩니다.

![](https://velog.velcdn.com/images/intellik/post/2248bfb7-3962-4211-bf2f-4c14d1d29b7f/image.png)
1. 데이터를 입력한다.
2. 입력받은 데이터를 바탕으로 프론트엔드는 웹 서버(NGINX, Apache 등)에 API 요청을 보낸다.
3. 웹 서버는 요청을 웹 애플리케이션 서버에 전달한다.
4. 웹 애플리케이션 서버는 데이터베이스에 필요한 데이터를 요청한다.
> 스프링과 express를 웹 애플리케이션 서버에 표시하였지만, 정확하게는 여기서 스프링과 익스프레스 프레임워크는 각각 Tomcat과 Node.js를 사용하고 이를 웹 애플리케이션 서버라고 부릅니다.

5. 데이터베이스는 요청받은 데이터를 웹 애플리케이션 서버에 반환합니다.
6. 웹 애플리케이션 서버는 적절한 형식(JSON, XML 등)으로 데이터를 알맞게 가공해 웹 서버에 응답합니다.
7. 웹 서버는 프론트엔드에 응답을 전달합니다.
8. 프론트엔드는 응답 값을 바탕으로 사용자 요청에 맞는 결괏값을 '보기 좋게' 출력합니다.



# 참고자료
[【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프](https://www.udemy.com/share/10694e3@jiflikM97neqVdzn_C6e4DmAtYKYglo5gZ58wroteFDUC2i_KfU5BKvxbIkb2xoy2g==/)
['Front-end' & 'back-end': What do these terms mean in different applications?](https://flyaps.com/blog/difference-front-end-back-end-development-in-different-applications/)

썸네일 작가: ChatGPT DALL·E