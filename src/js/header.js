const globalBtn = document.querySelector('.global__plus')
const salesBtn = document.querySelector('.salesService__btn')


const addActiveClass = (e) => {
  const target=  e.target.classList;
  console.log('실행중')
  target.contains('--active') ? target.remove('--active') : target.add('--active')
}

globalBtn.addEventListener('click', addActiveClass)
salesBtn.addEventListener('click', addActiveClass)
