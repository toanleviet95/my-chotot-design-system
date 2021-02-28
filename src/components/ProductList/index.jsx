import Slider from 'react-slick'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductCard from '../ProductCard'
import SlickWrapper from '../SlickWrapper'

const ProductList = ({ data, settings }) => (
  <SlickWrapper>
    <Slider {...settings}>
      {data.map(({ id, ...rest }) => <ProductCard key={`card_${id}`} {...rest} />)}
    </Slider>
  </SlickWrapper>

)

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  settings: PropTypes.object,
}

ProductList.defaultProps = {
  settings:  {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    initialSlide: 0,
  },
}

export default ProductList
