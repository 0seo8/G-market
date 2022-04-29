const globalBtn = document.querySelector('.global__plus')
const salesBtn = document.querySelector('.salesService__btn')


const addActiveClass = (e) => {
  const target=  e.target.classList;
  console.log('실행중')
  target.contains('is--active') ? target.remove('is--active') : target.add('is--active')
}

globalBtn.addEventListener('click', addActiveClass)
salesBtn.addEventListener('click', addActiveClass)
