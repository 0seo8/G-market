import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper, serSwiper, chaSwiper} from './swiper.js';
import {selectTab, clickBtn} from './tablist.js'
import { renderItem } from './best.js'

const body = document.querySelector('body')

renderItem()

selectTab('delivery__Gmarket')
selectTab('delivery__smile')
selectTab('navigation')
clickBtn()

const onload = () => {
  body.classList.remove('preload');
  body.classList.remove('onload');
}

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    new NavSwiper();
    new bestSwiper();
    new delSwiper();
    new serSwiper();
    new chaSwiper();
    onload()
  })

}

init()
  