// import Swiper from 'swiper'
import '../stylesheet/main.scss'
import  { NavSwiper, bestSwiper, delSwiper, serSwiper, chaSwiper} from './nav.js';
import {Wrapper} from './tablist.js'
// import{Hover} from './footer.js'

// // SalesSerive 
const salesService = document.querySelector('.salesService');
const salesServiceBtn = salesService.querySelector('.salesService__btn');
// Hover(salesService)

function addActive(e) {
  setTimeout(() => salesService.classList.add('is--active'));
}

function removeActive(e){
  setTimeout(() => salesService.classList.remove('is--active'));
}

salesService.addEventListener('click', addActive);
salesService.addEventListener('mouseleave', removeActive);
salesService.addEventListener('focusin', addActive);
salesService.addEventListener('focusout', removeActive);



// delivery tablist
Wrapper('delivery__Gmarket')
Wrapper('delivery__smile')

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