const tabContentItems = document.querySelectorAll('.tab-content-item');
const tabItems = document.querySelectorAll('.tab-item');

function selectItem() {
  removeShow();

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

tabItems.forEach(item => {
  item.addEventListener('mouseover', selectItem )
});

