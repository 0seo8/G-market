import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper, serSwiper, chaSwiper} from './swiper.js';
import {selectTab, clickBtn} from './tablist.js'
import { renderItem } from './best.js'

renderItem()

selectTab('delivery__Gmarket')
selectTab('delivery__smile')
selectTab('navigation')
clickBtn()


const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
      NavSwiper();
      new bestSwiper();
      delSwiper();
      serSwiper();
      chaSwiper();
  })

}

init()
  