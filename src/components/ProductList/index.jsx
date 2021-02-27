import Slider from "react-slick"
import { styled } from '@linaria/react'
import PropTypes from 'prop-types'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductCard from '../ProductCard'

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  dots: false,
  initialSlide: 0,
};

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

const Wrapper = styled.div`
  h3 {
    background: green;
    height: 150px;
    border: 1px solid yellow;
  }
  .slick-prev {
    display: block;
    position: absolute;
    background: url(https://static.chotot.com/storage/default/slide-prev.svg) 50% no-repeat;
    left: -18px;
    z-index: 11;
    background-size: 100%;
    width: 38px;
    height: 38px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    outline: none;
    user-select: none;
    &.slick-disabled {
      display: none !important;
    }
    &:hover {
      zoom: 1.5;
    }
  }
  .slick-next {
    display: block;
    position: absolute;
    background: url(https://static.chotot.com/storage/default/slide-next.svg) 50% no-repeat;
    background-size: 100%;
    width: 38px;
    height: 38px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    outline: none;
    user-select: none;
    right: -18px;
    z-index: 11;
    &.slick-disabled {
      display: none !important;
    }
    &:hover {
      zoom: 1.5;
    }
  }
`

const ProductList = () => (
  <Wrapper>
    <Slider {...settings}>
      {[...Array(10).keys()].map(i => <ProductCard key={`card_${i}`} {...cardProps} />)}
    </Slider>
  </Wrapper>

)

ProductList.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default ProductList
