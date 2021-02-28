import { styled } from '@linaria/react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const Button = styled.button`
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  display: block;
  width: 100%;
  color: rgb(56, 105, 159);
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  margin: 0px auto;
  svg {
    vertical-align: middle;
    margin-left: 5px;
  }
`

const LoadMore = ({ text, onClick }) => (
  <Button onClick={onClick}>
    {text}
    <Icon type='arrow-right' color='#38699F' />
  </Button>
)

LoadMore.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
}

export default LoadMore
