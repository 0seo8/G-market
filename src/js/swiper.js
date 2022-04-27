let NavSwiper = new Swiper('.promotion .swiper-container', {
  autoplay: { // 자동 재생 여부
    delay: 4000
  },
  slidesPerView: 7, // 한 번에 보여줄 슬라이드 개수
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생 여부

  pagination: { // 페이징
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },

  navigation: {
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
  on: {
    init: function () {
      const autoPlayBtn = document.querySelector('.controler button');
      autoPlayBtn.addEventListener('click', () => {
        let autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
        if (autoPlayState === 'false') {
          this.autoplay.stop();
          autoPlayBtn.style.backgroundPosition = '-410px 0'
          autoPlayBtn.setAttribute('aria-pressed', 'true');
          console.log('stop')
        } else if (autoPlayState === 'true') {
          autoPlayBtn.style.backgroundPosition = '-248px -46px'
          autoPlayBtn.setAttribute('aria-pressed', 'false');
          this.autoplay.start();
          console.log('play')
        };
      });
    }
  }
});

let bestSwiper = new Swiper('.best .swiper-container', {
  autoplay: {
    delay: 4000
  },
  slidesPerView: 5,
  slidesPerGroup: 5,
  loopFillGroupWithBlank: true,
  loop: true,

  navigation: {
    nextEl: '.best .button__next',
    prevEl: '.best .button__prev',
  },
})

let delSwiper = new Swiper('.delevery__banner .swiper-container', {
  loop: true,
  navigation : { 
    nextEl: '.delevery__banner .swiper-button-next',
    prevEl: '.delevery__banner .swiper-button-prev',
	},
})

let serSwiper = new Swiper('.video .swiper-container', {
  autoplay: { 
    delay: 4000
  },
  slidesPerView: 3, 
  centeredSlides: true, 
  loop: true, 
  navigation: {
    nextEl: '.video .button__next',
    prevEl: '.video .button__prev',
  },
})

let chaSwiper = new Swiper('.chance .swiper-container', {
  autoplay: { 
    delay: 1000
  },
  slidesPerView: 3,
  slidesPerGroup : 1,
  centeredSlides: true, 
  loop: true, 
  navigation: {
    nextEl: '.chance .button__next',
    prevEl: '.chance .button__prev',
  },
})



export { NavSwiper, bestSwiper, delSwiper, serSwiper, chaSwiper}