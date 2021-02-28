import Slider from 'react-slick'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlickWrapper from '../SlickWrapper'
import ProjectCard from '../ProjectCard'

const ProjectList = ({ data, settings }) => (
  <SlickWrapper>
    <Slider {...settings}>
      {data.map(({ id, ...rest }) => <ProjectCard key={`card_${id}`} {...rest} />)}
    </Slider>
  </SlickWrapper>

)

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
  settings: PropTypes.object,
}

ProjectList.defaultProps = {
  settings: {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    initialSlide: 0,
  },
}

export default ProjectList
