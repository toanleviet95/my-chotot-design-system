const cardProps = {
  title: 'Cho thuê phòng trọ mới xây',
  adType: 'user',
  condition: '75m - 2 PN',
  price: '12 triệu/tháng',
  time: '7 phút trước',
  location: 'Hà Nội',
  src: 'https://cdn.chotot.com/9n2H6UDn5s3GePX82SNGtL_ouil-kBZj59O6N6PXSNs/preset:listing/plain/e8845e28c27490de7dd988eee7a70490-2714350373056985016.jpg',
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
