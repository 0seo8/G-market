const get = target => document.querySelector(target)
const $bestList = get('.best__list')

const items = [{
    desc: '[댑]무료반품+10%+12%댑 여름 잠옷세트/바지~70%',
    price: '13,900'
  },
  {
    desc: '[백설]포도씨유 5병(900ml 5)',
    price: '34,210'
  },
  {
    desc: '(무료반품)12%+10%/티셔츠/세트/블라우스/남방/팬츠',
    price: '12,800'
  },
  {
    desc: '[캔마트]캔마트 여름NEW HOT아이템 최대35%+쿠폰+무배',
    price: '17,500'
  },
  {
    desc: '[블랙야크키즈](신세계센텀점)[블랙야크키즈 ]빼 놓을 수 없는 여름 필수 아이템 반팔 티셔츠 + 5부 팬츠 세트 2종택1',
    price: '33,950'
  },
  {
    desc: '[프롬산타]3+1 최대30켤레 남여 면덧신/양말/발목학생썬캡집게핀',
    price: '15,900'
  },
  {
    desc: '[이쌀이다] 21년산 아산 맑은쌀 삼광 20kg',
    price: '21,900'
  },
  {
    desc: '[테크액체세제]테크 클린앤리프레시(겸용) 대용량 8L',
    price: '9,900'
  },
  {
    desc: '19900원 균일가 S/S 블라우스/티셔츠/원피스/팬츠 外',
    price: '27,900'
  },
  {
    desc: '다온샵 22% 여름신상 청바지/면팬츠/슬랙스/빅사이즈',
    price: '17,000'
  },
  {
    desc: '[비비고][비비고] (CJ제일제당) 포도씨유 900ML 4병',
    price: '24,900'
  },
  {
    desc: '[브라운물티슈]브라운 아기물티슈 네이처 마일드 70매 캡형 10+10팩',
    price: '49,800'
  },
  {
    desc: '[이쌀이다] 21년산 당진해나루 삼광 20kg',
    price: '20,900'
  },
  {
    desc: '[해피플레이]장난감 자동차 다이노트랙 공룡대탐험_디럭스+공룡카',
    price: '29,900'
  },
  {
    desc: '반건조오징어 국산 소소 10미(500g내외) /16920원 쿠폰',
    price: '12,900'
  }

]
const createItems = (item, index) => {
  const bestItem = document.createElement('li')
  bestItem.classList.add('swiper-slide', 'best__item')
  bestItem.innerHTML = `
  <a href="/" class="best__link">
  <div class="product">
    <figure class="product__card">
      <div class="image--dimmed-layer"><img src="./images/bestProduct${index+1}.jpeg" alt="${item.desc}" class="product__image" width="100%" />
      </div>
      <figcaption class="product__caption">
       ${item.desc}
      </figcaption>
    </figure>
    <div class="product__rank">
      <span class="sr-only">순위</span>
      <span class="rank">${index+1}</span>
    </div>
    <div class="product__price">
      <span class="sr-only">판매가</span>
      <em class="price" role="text">${item.price} <span class="currencyUnit">원</span></em>
    </div>
  </div>
</a>

  `
  return bestItem;
}


export const renderItem = () => {
  $bestList.innerHTML = ''
  
  items.forEach((item, index) => {
    const itemCild = createItems(item, index);
    $bestList.appendChild(itemCild);
  })

}