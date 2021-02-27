import Slider from "react-slick"
import { styled } from '@linaria/react'
import PropTypes from 'prop-types'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProjectCard from '../ProjectCard'

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  initialSlide: 0,
};

const cardProps = {
  title: 'VnaHomes',
  adType: 'page',
  condition: 'VnaHomes - Hệ Thống Quản Lý Vận Hành Cho Thuê Căn Hộ',
  src: 'https://cdn.chotot.com/e2857Gqgk3sTzKStraAUW7eEEAvOz-KIRq7sbEHCJBc/preset:shopcover/plain/3c41f776b6c88d2017a5c988df5d924d-2668723585087137358.jpg',
  href: 'https://nha.chotot.com/chuyen-trang/vna-homes',
  alt: 'VnaHomes',
  address: 'Phố Đội Cấn, Quận Ba Đình, Hanoi Vietnam',
  avatar: 'https://tpc.googlesyndication.com/simgad/7986437991659865170',
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
      {[...Array(10).keys()].map(i => <ProjectCard key={`card_${i}`} {...cardProps} />)}
    </Slider>
  </Wrapper>

)

ProductList.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default ProductList
