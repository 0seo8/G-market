export function selectTab(tabParent) {
  const tabItems = document.querySelectorAll(`.${tabParent} .tab`);
  const tabContentItems = document.querySelectorAll(`.${tabParent} .tab__list`);
  const gotoLink = document.querySelector(`.${tabParent} #gotoLink`)

  function selectItem(e) {
    const tabContentItem = document.querySelector(`.${tabParent} #${this.id}-content`);
    removeHover();
    removeShow();
    this.classList.add('tab-Hovered');
    tabContentItem.classList.add('show');
    gotoLink? gotoLink.innerText = this.innerText + ' 바로가기': reset()
  }
  
  function removeHover() {
    tabItems.forEach(item => {
      console.log('실행중?')
      item.classList.remove('tab-Hovered');
    });
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
    console.log(item)
    item.addEventListener('click', selectItem);
  });
}

selectTab('delivery__Gmarket')
selectTab('delivery__smile')
