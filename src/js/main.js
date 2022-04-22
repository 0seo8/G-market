import '../stylesheet/main.scss'


new Swiper('.swiper-container', {
  // autoplay: { // 자동 재생 여부
  //   delay: 4000 
  // },
  slidesPerView: 7, // 한 번에 보여줄 슬라이드 개수
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생 여부
})