import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper, serSwiper, chaSwiper} from './nav.js';
import {selectTab, clickBtn} from './tablist.js'
import { renderItem } from './best.js'
const $body = document.querySelector('body');

renderItem()

selectTab('delivery__Gmarket')
selectTab('delivery__smile')
selectTab('navigation')
clickBtn()

//swiper
NavSwiper();
bestSwiper();
delSwiper();
serSwiper();
chaSwiper();

