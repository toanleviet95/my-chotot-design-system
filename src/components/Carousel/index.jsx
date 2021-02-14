import PropTypes from 'prop-types';
import { styled } from '@linaria/react'
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

const Container = styled.div`
  .flickity-slider > div {
    width: 100%;
  }
  .flickity-page-dots {
    bottom: 12px;
  }
  .flickity-page-dots .dot {
    width: 6px;
    height: 6px;
    opacity: 1;
    background: rgb(238, 238, 238);
  }
  .flickity-page-dots .dot.is-selected {
    background: rgb(155, 155, 155);
  }
`

const Image = styled.img`
  height: 238px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: block;
`

const Carousel = ({ images }) => {
  const handleRedirect = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Flickity reloadOnUpdate options={{ prevNextButtons: false }}>
        {images.map(({ src, alt, href }) => (
          <Image
            key={alt}
            onClick={e => handleRedirect(e, href)}
            src={src}
            alt={alt}
          />
        ))}
      </Flickity>
    </Container>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Carousel
