# [G-market](https://www.gmarket.co.kr/) 클론코딩


## 구현 목표
- 웹접근성 측면을 최대한 고려해서 마크업하기
- 에이전트 스타일을 리셋시키지 않고(노멀라이즈 적용), 마크업 및 스타일링 하며 기본적으로 가지고 있는 스타일 공부하기
- 컴포넌트 단위의 SCSS 적용해보기
- ES Module화 한번 도전해보기.

## 체크포인트 
### ✅ Sass 7-1패턴
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

### ✅ 웹접근성 측면의 마크업

#### **로고디자인**
```html
<h1 class="brand">
  <a href="https://gmarket.co.kr/" class="brand__link">
    <figure class="logo logo--ir logo--colorful">
      <span class="sr-only">Gmarket</span>
    </figure>
  </a>
</h1>  
```

- `h1`을 

### ✅Heading Map

<img src="https://velog.velcdn.com/images/0seo8/post/3545e433-6c48-4100-9e3c-0dc4a9933f53/image.png" width="200" float="left">

과제가 마무리된 후 최근에 알게 된 HeadingMap 기능을 이용해  확인을 해보았습니다.



1. 헤더영역의 navigationBar영역을 기존 홈페이지처럼 이미지요소를 삽입하는 것이 아닌 타이핑과 New뱃지를 만들어 구현했습니다.

2. 과제를 진행하다 생긴 궁금증
- [▶img태그의 alt=""는 생략해도 괜찮을까?](https://velog.io/@0seo8/%EA%B6%81%EA%B8%88%EC%A6%9D-img%ED%83%9C%EA%B7%B8%EC%9D%98-alt%EB%8A%94-%EC%83%9D%EB%9E%B5%ED%95%B4%EB%8F%84-%EA%B4%9C%EC%B0%AE%EC%9D%84%EA%B9%8C)
 
  => `alt` 속성 역시 웹접근성과 관련이 있으며 접근성 측면이 아니더라도 필요한 속성이기 때문에 비워놓기보다는 작성하는 것이 좋다는 조언을 얻었습니다🐥



----

## 과제를 하며 겪은 어려움

1. `webpack`다루기
- `webpack`과 `live sass complier`를 함께 사용하며 경로 설정으로 인한 어려움
  
 - `npm run dev`를 이용해 개발 서버를 여는 경우, png파일을 불러오지 못하는 문제 발생
   - 🐥 박영웅 강사님 도움으로 `webpack.config.js` 에서 `resolve.alias(경로 별칭)` 추가해 해결했습니다.

2. best 컴포넌트의 `swiper-slide`를 자바스크립트를 통해 동적으로 생성해보았다. 그런데 웹페이지에서 스와이퍼가 작용하지 않는다..?


3. 페이지가 처음 로드될 시 버벅(?) 거리는 현상발생
![](https://velog.velcdn.com/images/0seo8/post/bed19b8e-e3dc-4d87-b73c-088648766542/image.gif)

4. 아직 자바스크립트를 컴포넌트 단위로 어떻게 관리를 해야하는지 어려움이 있다. 😂

 ---

 ## 과제를 하며 배운 내용

1. `BEM`이란?
 - 가장 범용적으로 사용되는 클래스 컨벤션
 - block - Element - Modifier
 - B__E--M

