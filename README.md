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
---

### ✅ 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- 기존 G-market페이지의 경우 대체로 float속성을 이용해 작성을 한 것을 확인할 수 있었습니다.
- 웹페이지를 완성한 후 확인을 해보니, 한 부분을 제외한 모든 영역을 `diplay:flex`를 이용해 배치를 했다는 것을 확인할 수 있었습니다.😅
- 한 영역에서도 아래와 같이 초록색 부분은 flex, 파란색 영역은 grid를 이용해 배치를 했던 것을 확인할 수 있었습니다.

<img src="https://velog.velcdn.com/images/0seo8/post/01326d0b-45a4-4faf-b751-19a70a4393f2/image.png" width="250" float="left">

---

### ✅ JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.

#### **1. swiper라이브러리 사용**

- 스타벅스 예제 만들기에서 배운 swiper 기능을 이용했습니다. 
- Gmaket홈페이지에서 swiper라이브러리를 사용한 섹션은 총 6군데가 있었습니다.(실제 Gmarket에서도 swiper기능을 사용한 것을 확인할 수 있었습니다.)
- 클론 코딩을 하며 가장 어렵고 힘들게 했던 부분이었습니다😂
- (한군데의 문제를 해결하고 나면 또다른 섹션에서 문제가 발생하는..😭 => 해결하면 또다른 섹션,,, 무한루프)
  - 한페이지에 여러개의 swiper을 작성하는 경우 제대로 동작하지 않는 문제 
  - 스와이퍼 영역을 제외한 dimmed layer 만들기
  - 두개의 레이아웃 구조가 겹친 스타일링을 한 후, 버튼이 클릭되지 않는 이슈(요소쌓임우선순위)
  - 모든 슬라이드의 버튼이 동시동작하는 이슈
  - 동적으로 swiper-slide를 넣은 후 해당 영역의 swiper가 작동하지 않는 이슈
  - 모든 슬라이드가 1회만 작동을 하고 동작하지 않는 이슈
  - 버튼 커스터마이징하기
  - ▷ 버튼을 눌렀을 때 일시정지가 되고 다시 클릭 시 재생이 되는 부분 만들기.
  - 결국 스타벅스 예제 만들기에 모두 담겨있던 내용으로 강의를 들으며 따라하는 것과 내가 이해하고 공부 하는 것은 많이 다르다는 것을 깨닫게 되었습니다😅(아직 ing!)


#### **2. best섹션 JS를 통해 코드 구현** 
- 웹페이지를 만들면서 가장 많이 느낀 것이 하나하나 HTML을 작성하며 마크업하는 것이 너무 비효율적이고 지친다는 것이었습니다.
- 서툴지만 한 영역을 자바스크립트를 통해 동적으로 자식 요소를 생성해보았습니다.
- ~~best.js 파일에 작성 후 `export`, `import` 하는 연습도 해보았습니다.~~ **😭실패**
 
  => 잘 되었던 것 같은데, 되지 않네요 문제점 알려주시면 감사합니다!!😭

```js
<ul class="swiper-wrapper best__list"></ul>
```
<img src="https://velog.velcdn.com/images/0seo8/post/a13c4e85-9275-4742-9d10-6c4c2170cf00/image.png" width="150" float="left">

- 구현 후 느낀점
  - ~~오우..😯 인터넷을 찾아가며 힘들게 작성을 했는데 하루라도 빨리 자바스크립트를 배워 코드 몇줄만으로 구현하는 날이 오기를..🙏 바라게 되었습니다.~~


### **3. tab 클릭시 tablist가 열리는 자바스크립트 함수 구현**


서로 연동된 영역을 1. 부모요소 > 자식요소로 포함되게 마크업, 2. tab과 tablist로 영역을 나누어 마크업을 한 후 하나의 자바스크립트로 다룰 수 있도록 구현해보았습니다.

---

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

#### **믹스인 활용**
- 이번 클론코딩을 진행하며 sprite을 이용한 이미지 추출방법에 대해 배우게 되었는데, 조금 더 효율적으로 사용하기 위해 mixin을 이용해보았습니다.

```scss
@mixin sprite-img($sprite-position) {
  background-image: url($sprite-url);
  background-repeat: no-repeat;
  background-position: $sprite-position;
}
```

- 상품에 대한 설명이 길어지는 경우 2줄이상으로 넘어가지 않도록 믹스인을 만들어 사용해보았습니다.

```scss
@mixin multi-ellipsis($font-size, $line-height, $lines) {
  font-size: $font-size;
  line-height: $line-height;
  max-height: $line-height * $lines;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical; /* autoprefixer: off */
}
```

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

0. 자바스크립트
- 컴포넌트 단위로 관리해보기
- 클래스, 인스턴스, 모듈화 공부 + 이해의 필요성을 느끼게 되었습니다.
- swiper 자바스크립트 코드의 경우 따로 swiper.js파일을 만들어 작성 후 export, import를 이용해 가져왔습니다.
- 아직 컴포넌트에 대한 이해와 생성자 함수에 대한 이해가 많이 부족하다는 것을 깨닫게 되었습니다.

1. `webpack`다루기
- `webpack`과 `live sass complier`를 함께 사용하며 경로 설정으로 인한 어려움
  
 - `npm run dev`를 이용해 개발 서버를 여는 경우, png파일을 불러오지 못하는 문제 발생
   - 🐥 박영웅 강사님 도움으로 `webpack.config.js` 에서 `resolve.alias(경로 별칭)` 추가해 해결했습니다.

2. best 컴포넌트의 `swiper-slide`를 자바스크립트를 통해 동적으로 생성해보았다. 그런데 웹페이지에서 스와이퍼가 작용하지 않는다..?
   - 🐥 같은 조원 주상님의 조언으로 해답을 얻었습니다.
   - swiper코드를 import시킬 때 `new`키워드를 사용해 변동된 상황(?) 반영<br>
   - 😭😭이것저것을 만져보았는데,,, `new`키워드를 붙여도 또 다시 스와이퍼가 동작하지 않는다.


3. 페이지가 처음 로드될 시 버벅(?) 거리는 현상발생
![](https://velog.velcdn.com/images/0seo8/post/bed19b8e-e3dc-4d87-b73c-088648766542/image.gif)

  - 아직 해결하지 못했습니다😭 조언부탁드립니다.

4. 아직 자바스크립트를 컴포넌트 단위로 어떻게 관리를 하는지와 클래스에 대한 이해에 어려움이 있어 공부가 더 많이 필요한 것 같습니다. 😂
![](https://velog.velcdn.com/images/0seo8/post/27c073bd-9f0a-4a4e-b598-8b9bcc83918f/image.png)


 ---

## 과제 후 느낀점

- 생각보다 정말 많은 시간이 걸리게 되었는데, 어떤 날은 배운내용에 대해 오오? 하면서 시간가는 줄 하루를 꼴딱 새기도 하고, 또 하루는 풀리지 않는 부분으로 멘탈을 잡고 있는게 힘들기도 한 정말 많은 것을 느끼고 경험하게 되었습니다. 코딩을 받아적는 것이 아니라 스스로 레이아웃 구조를 생각하고 배치하면서 완성시킨 첫번째 페이지라 더 많은 지식을 쌓은 후 꼭 다시 한번 리팩토링을 해보고 싶습니다! 
(ps. 하나하나 list를 작성하는 것이 아니라 코드 몇줄만으로 척척  완성시켜보고 싶은,,🙏)

- gmarket 코드를 분석하며 느낀 점
  1. 컬러 변수를 통해 일관화하면 좋겠다는 생각.
    - gmarket페이지의 경우 같은 색상이 블랙과 화이트를 제외하고는 3번(?)이상 같은 색상을 사용하지 않고 있다는 것을 확인할 수 있었습니다. (눈으로 보기에는 같아보이지만 다 다른색상)
  2. 페이지를 완성하고 보니 공통적으로 사용된 스타일이 많았는데 이런 부분을 묶어 공통적으로 사용하면 좋겠다는 

## 공부해야할 부분

- 컴포넌트 단위의 관리와 전역관리에 대한 공부의 필요성 
- 클래스 함수, 모듈화 이해하기
- 웹 브라우저 렌더링 프로세스 공부하기
- lazy, async를 이용한 최적화(?)
- 이미지 파일 추출 법 및 font.ttp, font.otf 파일을 적용시키는 방법
- 생성자함수를 이용한 swiper 생성 이해
- 새로고침이나 렌더링 시 생기는 버벅거림을 해결하는 방법

문제: swiper-slide를 자바스크립트 코드로 구현한 후 자동 적용X


