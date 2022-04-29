import '../stylesheet/main.scss'
import  { NavSwiper,bestSwiper, delSwiper, serSwiper, chaSwiper} from './swiper.js';
import {selectTab } from './tablist.js';
// import { renderItem } from './best.js';
import { goTo } from './gototop.js';
import {showPro, hiddenPro } from './Btn.js'
import { addActiveClass } from './header.js'


selectTab('delivery__Gmarket')
selectTab('delivery__smile')
selectTab('navigation')


const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
  })
}

init()