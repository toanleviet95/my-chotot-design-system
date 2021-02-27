import { styled } from '@linaria/react'
import PropTypes from 'prop-types'
import Icon from '../Icon';

const Container = styled.div`
  padding: 8px;
  overflow: hidden;
  background: #fff;
  width: 238px;
`

const Wrapper = styled.div`
  position: relative;
  margin: -1px 0;
  display: block;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
    z-index: 2;
  }
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
  padding: 12px;
  position: relative;
  text-align: ${props => (props.adType === 'page' ? 'center': 'left')};
`

const Thumbnail = styled.div`
  position: relative;
  background: url(https://static.chotot.com/storage/default_images/c2c_ad_image.jpg) 50% no-repeat;
  background-size: cover!important;
  width: 100%;
  height: ${props => (props.adType === 'page' ? '124px': '164px')};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  display: inline-block;
`

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: auto;
  background: #ebebeb;
  margin-top: 60px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  border: 2px solid #fff;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
    display: block;
  }
`

const AdTitle = styled.div`
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  color: #222;
  font-size: 15px !important;
  line-height: 20px !important;
  text-decoration: none;
  white-space: unset;
`

const ConditionWrapper = styled.div`
  height: ${props => (props.adType === 'news' ? '69px': '34px')};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  line-height: 1.33;
  color: #9b9b9b;
  -webkit-line-clamp: ${props => (props.adType === 'news' ? '4': '2')};
`

const AddressWrapper = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #222;
  display: inline-block;
  margin: 4px 4px 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 20px!important;
  width: 100%;
  svg {
    vertical-align: top;
    margin-right: -4px;
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

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-style: none;
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

const ProjectCard = ({
  title, adType, address, condition, price, src, href, alt, isBestPrice, avatar,
}) => (
  <Container>
    <Wrapper>
      <LinkWrapper href={href}>
        <ThumbnailWrapper>
          <Thumbnail adType={adType}>
            <Image src={src} alt={alt} loading='lazy' />
          </Thumbnail>
          {avatar && adType === 'page' && (
            <Avatar>
              <img src={avatar} alt={avatar} loading='lazy' />
            </Avatar>
          )
          }
        </ThumbnailWrapper>
        <Caption adType={adType}>
          <AdTitle>
            {title}
          </AdTitle>
          {address && (
            <AddressWrapper>
              <Icon type='location' />
              {address}
            </AddressWrapper>
          )
          }
          {['page', 'news'].includes(adType) && (
            <ConditionWrapper adType={adType}>
              {condition}
            </ConditionWrapper>
            )
          }
          {adType === 'project' && (
            <div>
              <Price>{price}</Price>
              {isBestPrice && <BestPrice>GIÁ TỐT</BestPrice>}
            </div>
          )
          }
        </Caption>
      </LinkWrapper>
    </Wrapper>
  </Container>
)

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  adType: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string,
  isBestPrice: PropTypes.bool,
  avatar: PropTypes.string,
}

ProjectCard.defaultProps = {
  alt: '',
  isBestPrice: false,
  avatar: '',
}

export default ProjectCard
