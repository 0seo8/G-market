export function selectTab(tabParent) {
  const tabItems = document.querySelectorAll(`.${tabParent} .tab`);
  const tabContentItems = document.querySelectorAll(`.${tabParent} .tab__list`);
  const gotoLink = document.querySelector(`.${tabParent} #gotoLink`)

  function selectItem(e) {
    const tabContentItem = document.querySelector(`.${tabParent} #${this.id}-content`);
    removeShow();
    tabContentItem.classList.add('show');
    gotoLink? gotoLink.innerText = this.innerText + ' 바로가기':reset()
  }
  
  function removeShow() {
    tabContentItems.forEach(item => {
      item.classList.remove('show');
    });
  }

  function reset() {
    tabItems.forEach(item => {
      item.addEventListener('focusout', removeShow )
      item.addEventListener('mouseleave', removeShow )
    });
  }
  tabItems.forEach(item => {
    item.addEventListener('click', selectItem )
    item.addEventListener('mouseover', selectItem )
  });
}


export function clickBtn (target) {
  const btn = document.querySelector(target);

  function addActive(e){
    setTimeout(() => btn.classList.add('--active'));
  }
  
  function removeActive(e){
    setTimeout(() => btn.classList.remove('--active'));
  }

  btn.addEventListener('click', addActive )
  btn.addEventListener('focusin', addActive);
  btn.addEventListener('focusout', removeActive);
}
