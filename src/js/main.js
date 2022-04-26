// import Swiper from 'swiper'
import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper, serSwiper, chaSwiper} from './nav.js';
import {selectTab, clickBtn} from './tablist.js'
import { renderItem } from './best.js'

selectTab('delivery__Gmarket')
selectTab('delivery__smile')
selectTab('navigation')
clickBtn()
renderItem()

//rank순위
document.querySelectorAll('.rank').forEach((el, i) => {
  el.innerText = i + 1;
})

//swiper
const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    NavSwiper();
    bestSwiper();
    delSwiper();
    serSwiper();
    chaSwiper();
  })
}

init()