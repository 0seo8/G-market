// Promotion Btn 

export function showPro() {
  const promotionBtn = document.querySelector('#promotionBtn')
  promotionBtn.classList.add('is--close')
  console.log('open!')

}

export function hiddenPro() {
  const promotionBtn = document.querySelector('#promotionBtn')
  promotionBtn.classList.remove('is--close')
  console.log('close!')
}

