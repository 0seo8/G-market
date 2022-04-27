# [G-market](https://www.gmarket.co.kr/) 클론코딩

[▶원본 사이트](https://www.gmarket.co.kr/)


[▶netlify배포]

## 구현 목표
- 웹접근성 측면을 최대한 고려해서 마크업하기
- 에이전트 스타일을 리셋시키지 않고(노멀라이즈 적용), 마크업 및 스타일링 하며 기본적으로 가지고 있는 스타일 공부하기
- 컴포넌트 단위의 SCSS 적용해보기
- ES Module화 한번 도전해보기.
- 새로운 개념을 공부하고 정리하는 시간 가지기.

## 체크포인트 

### ✅ 시맨틱 요소를 최대한 활용해 작성하세요.

**1. 시멘틱 태그를 이용한 마크업**

- `<header>`,`<section>`,`<footer>`태그를 이용해 영역을 나누고 각 영역 안에는 `h1~3`요소가 포함될 수 있도록 마크업 했습니다.
- HeadingsMAP을 이용해 시멘틱 요소로 마크업을 한 결과를 한번 확인해보았습니다. 
(잘한 건지는 모르겠습니다.😅)

  <img src="https://velog.velcdn.com/images/0seo8/post/3545e433-6c48-4100-9e3c-0dc4a9933f53/image.png" width="150" float="left">


#### **2. IR기법 사용**
- 설명을 위한 `<span>`태그를 추가한 후 화면에서는 보이지 않지만, 스크린리더와 같은 보조기기들이 접근할 수 있도록 `.sr-only`클래스를 생성 부여했습니다.

>**IR기법**
>- 이미지를 볼 수 없는 사용자에게 적절한 대체 텍스트를 제공하는 기법(이미지 대체텍스트 제공을 위한 CSS기법)
>- 관리측면이나 시멘틱한 마크업이 어려운 경우 사용하는 대체기술로, 웹페이지의 로고를 디자인 하는 경우 자주 쓰이는 기법.
>- IR대체 텍스트를 작성할 때는 보조기기가 구조에 맞춰 읽어들일 수 있도록 시멘틱 구조를 생각하고 작성을 해야한다.

```html
<h1 class="brand">
  <a href="https://gmarket.co.kr/" class="brand__link">
    <figure class="logo logo--ir logo--colorful">
      <span class="sr-only">Gmarket</span>
    </figure>
  </a>
</h1>
```

```scss
/* Hidden Content */
.sr-only {
  position: absolute;
  width: 1px; //보조기기가 가상커서를 이용해 화면을 선택하므로 최소한의 focus영역 확보
  height: 1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  clip-path: polygon(0 0,0 0,0 0); //화면에서 보이지 않는 영역을 잘라내어 숨겨진것과 같은 트릭구현
  white-space: nowrap;
}
```

#### PLUS **설명을 위한 태그 추가**
- 마찬가지로 `.sr-only`클래스 이용해 웹접근성측면에서의 마크업에 조금 더 신경써보았습니다.

```html
<div class="product__detail">
  <div class="product__type">
    <span class="sr-only">상품유형</span>
    <span class="type type1">전단상품</span>
  </div>
  <div class="product__desc">
    <span class="sr-only">상품 설명</span>
    <p class="desc__text">농심 올리브 짜파게티 140G 5입</p>
  </div>
  <div class="product__price">
    <span class="sr-only">판매가</span>
    <em class="price" role="text">3,880 <span class="currencyUnit">원</span></em>
  </div>
</div>
```
실제 화면에 렌더링된 모습

<img src="https://velog.velcdn.com/images/0seo8/post/253b95f2-5d92-4135-948f-dbbba1aeab14/image.png" width="150" float="left">


- `<footer>`영역의 경우 `aria-hidden`속성을 사용해 `:`가 읽히지 않도록 마크업해보았습니다.
```html
<div class="Information__item">
  <span role="text">사업자등록번호<span aria-hidden="true"> : </span>220-81-83676</span>
  <span class="divider"></span>
  <span role="text">통신판매업신고<span aria-hidden="true"> : </span>강남 10630호</span>
  <div class="button"><span class="button_click">사업자정보확인</span></div>
</div>
```

### ✅ 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- 기존 G-market페이지의 경우 대체로 float속성을 이용해 작성을 한 것을 확인할 수 있었습니다.
- 웹페이지를 완성한 후 확인을 해보니, 한 부분을 제외한 모든 영역을 `diplay:flex`를 이용해 배치를 했다는 것을 확인할 수 있었습니다.😅
- 한 영역에서도 아래와 같이 초록색 부분은 flex, 파란색 영역은 grid를 이용해 배치를 했던 것을 확인할 수 있었습니다.

<img src="https://velog.velcdn.com/images/0seo8/post/01326d0b-45a4-4faf-b751-19a70a4393f2/image.png" width="250" float="left">

### ✅ JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.

#### **1. swiper라이브러리 사용**

- 스타벅스 예제 만들기에서 배운 swiper 기능을 많은 영역에서 사용을 할 수 있었습니다. 실제로 페이지의 코드를 뜯어보니 마찬가지로 페이지에서도 swiper을 이용해 배치를 한 것을 확인할 수 있었습니다!
- swiper 자바스크립트 코드의 경우 따로 swiper.js파일을 만들어 작성 후 export, import를 이용해 가져왔습니다.

![](https://velog.velcdn.com/images/0seo8/post/a6e629e8-33f7-46c9-85a0-6ff02e1f6a50/image.png)

#### **2. best섹션 JS를 통해 코드 구현**
- 웹페이지를 만들면서 가장 많이 느낀 것이 하나하나 HTML을 작성하며 마크업하는 것이 너무 비효율적이고 지친다는 것이었습니다.
- 서툴지만 한 영역을 자바스크립트를 통해 동적으로 자식 요소를 생성해보았습니다.
- best.js 파일에 작성 후 `export`, `import` 하는 연습도 해보았습니다.

```js
<ul class="swiper-wrapper best__list"></ul>
```
<img src="https://velog.velcdn.com/images/0seo8/post/a13c4e85-9275-4742-9d10-6c4c2170cf00/image.png" width="150" float="left">

- 구현 후 느낀점
  - 오우..😯 인터넷을 찾아가며 힘들게 작성을 했는데 하루라도 빨리 자바스크립트를 배워 코드 몇줄만으로 구현하는 날이 오기를..🙏 바라게 되었습니다.

### ✅ SCSS를 도입해보세요.
#### **Sass 7-1패턴 사용**
>7개의 폴더로 나눠서 관리를 한 후 최종적으로 한 파일을 만들어 낸다는 개념.

|폴더명|내용|
|------|-----|
|abstracts|변수 ,함수, 믹스인, 플레이스홀더|
|base/|리셋/정규화, 타이포그래피 규칙|
|components/|버튼, 캐러셀, 커버, 드롭다운|
|layout/|네비게이션, 그리드 시스템, 헤더, 푸터, 사이드바, 폼|
|pages/|폼 한정스타일, 연락처 한정스타일|
|themes/|디폴트 테마, 관리자 테마|
|vendors/|bootstrap, jQuery UI|

- 프로젝트 규모가 작아 abstracts, base, components, pages, themes만을 활용했습니다. 
- 아직도 어떻게 이 파일이 어느 폴더에 해당되는 건지 헷갈리는데, 조언 부탁드립니다! 🙏

<img src="https://velog.velcdn.com/images/0seo8/post/c22eeab1-ef68-47f4-b589-de4126ae33cf/image.png" width="150" float="left">

### ✅ SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.

- 아직 webpack의 다양한 기능들을 사용하지 못하고 있는 것 같지만 프로젝트에 처음으로 제대로 webpack을 이용해보았습니다!

### ✅ BEM 방법론을 도입해보세요.
>`BEM`이란?
> - 가장 범용적으로 사용되는 클래스 컨벤션
> - block - Element - Modifier
> - B__E--M

 아직 Modifier을 구분하는 것을 잘 하지 못하는 것 같지만 노력해 코드를 작성해보았습니다!

---

## 과제를 진행하다 생긴 궁금증
- [▶img태그의 alt=""는 생략해도 괜찮을까?](https://velog.io/@0seo8/%EA%B6%81%EA%B8%88%EC%A6%9D-img%ED%83%9C%EA%B7%B8%EC%9D%98-alt%EB%8A%94-%EC%83%9D%EB%9E%B5%ED%95%B4%EB%8F%84-%EA%B4%9C%EC%B0%AE%EC%9D%84%EA%B9%8C)
 
  => `alt` 속성 역시 웹접근성과 관련이 있으며 접근성 측면이 아니더라도 필요한 속성이기 때문에 비워놓기보다는 작성하는 것이 좋다는 조언을 얻었습니다🐥<br>

  >※유용한 확장 기능 소개!
  크롬 브라우저의 **web developer**라는 확장 기능의 Replace Images with Alt Attributes 을 이용해 확인을 해보면 이미지를 볼 수 없는 경우 대체텍스트가 대신 나타나는 것을 확인할 수 있습니다.
  ![](https://velog.velcdn.com/images/0seo8/post/28bd32bc-204f-4d79-8b68-54a22afb4a7a/image.png)

----

## 과제를 하며 겪은 어려움

1. `webpack`다루기
- `webpack`과 `live sass complier`를 함께 사용하며 경로 설정으로 인한 어려움
  
 - `npm run dev`를 이용해 개발 서버를 여는 경우, png파일을 불러오지 못하는 문제 발생
   - 🐥 박영웅 강사님 도움으로 `webpack.config.js` 에서 `resolve.alias(경로 별칭)` 추가해 해결했습니다.

2. best 컴포넌트의 `swiper-slide`를 자바스크립트를 통해 동적으로 생성해보았다. 그런데 웹페이지에서 스와이퍼가 작용하지 않는다..?
   - 🐥 같은 조원 주상님의 조언으로 해답을 얻었습니다.
   - swiper코드를 import시킬 때 `new`키워드를 사용해 변동된 상황(?) 반영<br>


3. 페이지가 처음 로드될 시 버벅(?) 거리는 현상발생
![](https://velog.velcdn.com/images/0seo8/post/bed19b8e-e3dc-4d87-b73c-088648766542/image.gif)

  - 아직 해결하지 못했습니다😭 조언부탁드립니다.

4. 아직 자바스크립트를 컴포넌트 단위로 어떻게 관리를 해야하는지 어려움이 있다. 😂

 ---

## 과제 후 느낀점

- 조금은 가벼운 마음으로 즐겁게 시작하기도 했지만, 이번 과제를 진행하는 동안 부족한 부분을 많이 깨닫는 시간이 되었습니다.
- 자바스크립트의 전역관리에 대해 많은 궁금증과 호기심을 가지는 시간이 되었습니다.
- 무엇보다 HTML/CSS에서도 브라우저 렌더링 과정 및 이미지 파일 추출 및 지연, 반응형 웹디자인을 위한 구조 등 공부하고 보충해야 할 부분이 많구나 라는 생각도 들었습니다.
- 후반으로 갈 수록 한 부분을 디자인하는데 들이는 시간과 정성이 부족해진 것 같다는 아쉬움이 드는데, 더욱 분발하겠습니다!