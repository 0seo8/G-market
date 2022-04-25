// import Swiper from 'swiper'
import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper} from './nav.js';
import {Wrapper} from './tablist.js'



Wrapper('delivery__Gmarket')
Wrapper('delivery__smile')

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