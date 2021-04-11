import { styled } from '@linaria/react'
import PropTypes from 'prop-types'

const adTypeSrc = {
  user: 'https://static.chotot.com/storage/chotot-icons/svg/user.svg',
  pro: 'https://static.chotot.com/storage/chotot-icons/next/pro.svg',
}

const Container = styled.div`
  padding: 12px;
  border-right: 1px solid #f4f4f4;
  overflow: hidden;
  background: #fff;
  &:hover {
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    z-index: 2;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: block;
  height: 100%;
`

const LinkWrapper = styled.a`
  text-decoration: none;
  color: #222;
`

const ThumbnailWrapper = styled.div`
  position: relative;
  display: flex;
  margin: -1px;
  justify-content: center;
`

const Caption = styled.div`
  padding-bottom: 8px;
  position: relative;
`

const Footer = styled.div`
  color: #9b9b9b;
  bottom: -6px;
  width: 100%;
  left: 0;
  display: flex;
`

const Thumbnail = styled.div`
  position: relative;
  background: url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat;
  background-size: cover!important;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  display: inline-block;
  height: 169px;
`

const ImgNumber = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: url(https://static.chotot.com/storage/chotot-icons/svg/number-image.svg) no-repeat;
  width: 24px;
  height: 20px;
  font-weight: 700;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 11px;
  }
`

const Ribbon = styled.div`
  background-color: rgb(245, 154, 0);
  border-color: rgb(245, 154, 0);
  color: rgb(255, 255, 255);
  position: absolute;
  display: block;
  padding: 0 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  z-index: 9;
  height: 40px;
  line-height: 55px;
  top: -6px;
  font-size: 12px;
  right: auto;
  right: -30px;
  transform: rotate(45deg);
  &:after {
    display: block;
    padding-top: 100%;
    content: "";
  }
`

const SaveAdWrapper = styled.div`
  right: 8px;
  bottom: 4px;
  z-index: 9;
  position: absolute;
  button {
    padding: 0;
    background: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
`

const AdTitle = styled.div`
  color: #222;
  font-size: 14px!important;
  line-height: 20px!important;
  text-decoration: none;
  white-space: unset;
  margin-top: 8px;
  height: 40px!important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
`

const ConditionWrapper = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 22px;
  span {
    font-size: 14px;
    line-height: 1.43;
    color: #9b9b9b;
    margin-top: 2px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`

const Price = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.33;
  color: #d0021b;
  display: inline-block;
  margin: 2px 4px 0 0;
`

const Divider = styled.div`
  display: inline-block;
  line-height: 6px;
  &::after {
    font-size: 14px;
    vertical-align: middle;
    content: ".";
    display: inline-block;
  }
`

const Time = styled.div`
  vertical-align: middle;
  display: inline-block;
  font-size: 11px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
  margin-top: 2px;
  span {
    font-size: 11px;
    margin: 0 3px;
  }
`

const Location = styled.span`
  max-width: 66px;
  vertical-align: middle;
  display: inline-block;
  font-size: 11px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
  margin-top: 2px;
  span {
    font-size: 11px;
    margin: 0 3px;
  }
`
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Icon = styled.img`
  border-style: none;
  object-fit: cover;
  margin-right: 2px;
  width: 15px;
`

const BestPrice = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(203, 32, 38);
  font-weight: 700;
  font-size: 12px;
  padding: 0 4px;
  border-radius: 3px;
  border: 1px solid rgb(203, 32, 38);
  text-transform: uppercase;
  height: 20px;
  line-height: 20px;
  position: relative;
  display: inline-block;
`

const ProductCard = ({
  title, adType, condition, price, time, location, src, href, alt, numImages, isHotCard, isBestPrice
}) => (
  <Container>
    <Wrapper>
      <LinkWrapper href={href}>
        <ThumbnailWrapper>
          <Thumbnail>
            <Image src={src} alt={alt} loading='lazy' />
            <ImgNumber>
              <span>
                {numImages}
              </span>
            </ImgNumber>
            {isHotCard && <Ribbon>HOT</Ribbon>}
          </Thumbnail>
          <SaveAdWrapper>
            <button type='button'>
              <img src='https://static.chotot.com/storage/chotot-icons/next/save-ad.svg' alt='saveAd' />
            </button>
          </SaveAdWrapper>
        </ThumbnailWrapper>
        <Caption>
          <AdTitle>
            {title}
          </AdTitle>
          <ConditionWrapper>
            <span>
              {condition}
            </span>
          </ConditionWrapper>
          <div>
            <Price>{price}</Price>
            {isBestPrice && <BestPrice>GIÁ TỐT</BestPrice>}
          </div>
        </Caption>
        <Footer>
          <div>
            <Icon src={adTypeSrc[adType]} alt={adType} />
          </div>
          <Divider />
          <Time>
            <span>
              {time}
            </span>
          </Time>
          <Divider />
          <Location>
            <span>
              {location}
            </span>
          </Location>
        </Footer>
      </LinkWrapper>
    </Wrapper>
  </Container>
)

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  adType: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string,
  numImages: PropTypes.number,
  isHotCard: PropTypes.bool,
  isBestPrice: PropTypes.bool,
}

ProductCard.defaultProps = {
  alt: '',
  numImages: 0,
  isHotCard: false,
  isBestPrice: false,
}

export default ProductCard
