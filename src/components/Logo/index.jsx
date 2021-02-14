import { styled } from '@linaria/react'
import PropTypes from 'prop-types'

const Link = styled.a`
  height: 52px;
  display: inline-flex;
  align-items: center;
  img {
    height: 35px;
    border-style: none;
  }
`

const Logo = ({ src, href, alt }) => (
  <Link href={href}>
    <img src={src} alt={alt} />
  </Link>
)

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Logo
