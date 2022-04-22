import '../stylesheet/main.scss'


new Swiper('.swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  width: 976,
  autoplay: { // 자동 재생 여부
    delay: 5000 ,// 5초마다 슬라이드 바뀜
    disableOnInteraction: false, 
  },
  loop: true, // 반복 재생 여부
  loopAdditionalSlides : 1,
  // slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.swiper-button-prev', // 이전 버튼 선택자
    nextEl: '.swiper-button-next' // 다음 버튼 선택자
  }
});