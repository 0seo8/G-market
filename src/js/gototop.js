export function goTo () {
  const toTopEl = document.querySelector('#to-top')
  window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
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
}