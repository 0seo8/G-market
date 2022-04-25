// import Swiper from 'swiper'
import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper} from './nav.js';

const tabItems = document.querySelectorAll('.tabs__inner .brand');
const tabContentItems = document.querySelectorAll('.tab-content .offer__list');

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
  item.addEventListener('click', selectItem )
});

document.querySelectorAll('.rank').forEach((el, i) => {
  el.innerText = i + 1;
})

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    NavSwiper();
    bestSwiper();
    delSwiper()
  })
}

init()