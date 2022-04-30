const categoryBtn = document.querySelectorAll('.category__button')
const categorydepth = document.querySelectorAll('.category__depth2')

function selectItem(e) {
  const tabContentItem = document.querySelector(`.category #${this.id}-content`);
  removeShow();
  tabContentItem.classList.add('show');
}

function removeHover() {
  categoryBtn.forEach(item => {
    item.classList.remove('is--open');
  });
}

function removeShow() {
  categorydepth.forEach(item => {
    item.classList.remove('show');
  });
}

categoryBtn.forEach(item => {
  item.addEventListener('click', selectItem);
});