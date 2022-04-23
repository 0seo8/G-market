// import Swiper from 'swiper'
import '../stylesheet/main.scss'

new Swiper('.promotion .swiper-container', {
  autoplay: { // 자동 재생 여부
    delay: 4000 
  },
  slidesPerView: 7, // 한 번에 보여줄 슬라이드 개수
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 재생 여부

  pagination : { // 페이징
		el : '.swiper-pagination',
		clickable : true, 
  },

  navigation : { 
		nextEl : '.swiper-next', 
		prevEl : '.swiper-prev', 
	},
})

new Swiper('.best .swiper-container', {
  autoplay: { 
    delay: 4000 
  },
  slidesPerView: 5,
  slidesPerGroup : 5,
  loopFillGroupWithBlank : true,
  loop: true,

  navigation : { 
		nextEl : '.swiper-next', 
		prevEl : '.swiper-prev', 
	},
})

document.querySelectorAll('.rank').forEach((el, i) => {
  el.innerText = i + 1;
}) 

// TabLIst
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
	removeShow();

	const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabItems.forEach(item => {
	item.addEventListener('hover', selectItem);
});

