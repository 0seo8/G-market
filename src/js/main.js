import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper, serSwiper, chaSwiper} from './swiper.js';
import {selectTab, clickBtn} from './tablist.js';
import { renderItem } from './best.js';
import { goTo } from './gototop.js';



renderItem()

selectTab('delivery__Gmarket')
selectTab('delivery__smile')
selectTab('navigation')
clickBtn()
goTo()

const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    console.log('진행중?')
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }}, 300))
  
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
  scrollTo: 0
  })
})


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