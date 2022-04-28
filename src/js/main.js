import '../stylesheet/main.scss'
import  { NavSwiper,bestSwiper, delSwiper, serSwiper, chaSwiper} from './swiper.js';
import {selectTab, clickBtn} from './tablist.js';
import { renderItem } from './best.js';
import { goTo } from './gototop.js';
import {showPro, hiddenPro } from './Btn.js'


renderItem()

selectTab('delivery__Gmarket')
selectTab('delivery__smile')
selectTab('navigation')
clickBtn('.salesService__btn')
clickBtn('.global__plus')
goTo()

const closeBtn = document.querySelector('.btn-close')
const openBtn = document.querySelector('.button__more')

closeBtn.addEventListener('click', showPro )
openBtn.addEventListener('click', hiddenPro )

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
      NavSwiper();
      delSwiper();
      serSwiper();
      chaSwiper();
      bestSwiper();
  })

}

init()