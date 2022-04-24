// import Swiper from 'swiper'
import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper} from './nav.js';

const tabContentItems = document.querySelectorAll('.tab-content-item');
const tabItems = document.querySelectorAll('.tab-item');

function selectItem() {
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
  item.addEventListener('mouseover', selectItem )
});

document.querySelectorAll('.rank').forEach((el, i) => {
  el.innerText = i + 1;
})

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    NavSwiper();
    bestSwiper();
  })
}

init()