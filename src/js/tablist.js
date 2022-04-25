export function Wrapper(tabParent) {
  const tabItems = document.querySelectorAll(`.${tabParent} .tab`);
  const tabContentItems = document.querySelectorAll(`.${tabParent} .offer__list`);
  const gotoLink = document.querySelector(`.${tabParent} #gotoLink`)

  function selectItem() {
    gotoLink.innerText = this.innerText + ' 바로가기';
    const tabContentItem = document.querySelector(`.${tabParent} #${this.id}-content`);
    removeShow();
    tabContentItem.classList.add('show');
  }
  
  function removeShow() {
    tabContentItems.forEach(item => {
      item.classList.remove('show');
    });
  }
  tabItems.forEach(item => {
    item.addEventListener('click', selectItem )
  });
}
