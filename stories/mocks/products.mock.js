const cardProps = {
  title: 'Cho thuê phòng trọ mới xây',
  adType: 'user',
  condition: '75m - 2 PN',
  price: '12 triệu/tháng',
  time: '7 phút trước',
  location: 'Hà Nội',
  src: 'https://cdn.chotot.com/QIwA5B_B5fBk39Kpb_2tPCw8RcPFwUbncOMDtEK09t4/preset:listing/plain/00b502d729a6fc50efcd09cbf7d3f711-2692465108042704753.jpg',
  href: 'https://nha.chotot.com/tp-ho-chi-minh/quan-tan-binh/thue-can-ho-chung-cu/79232897.htm',
  alt: 'Sky Center Phổ Quang Tân Bình Cho Thuê 2PN FNT',
  numImages: 6,
  isHotCard: true,
  isBestPrice: true,
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  dots: false,
  initialSlide: 0,
}

const products = [...Array(10).keys()].map(i => ({ id: i, ...cardProps }));

export {
  settings,
  products,
};
