import { styled } from '@linaria/react'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: absolute;
  top: 92px;
  background-color: rgb(255, 255, 255);
  width: calc(100% + 1px);
  box-shadow: rgb(0 0 0 / 20%) 0px 10px 10px 0px;
  z-index: 10;
  a {
    padding: 12px 16px;
    border-top: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    height: 45px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: rgb(244, 244, 244);
    }
  }
`

const Dropdown = ({ items }) => (
  <Container>
    {
      items.map(({ href, text }) => (
        <a href={href}>
          {text}
        </a>
      ))
    }
  </Container>
)

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Dropdown
