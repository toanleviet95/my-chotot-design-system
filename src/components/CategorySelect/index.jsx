import { useState } from 'react'
import { styled } from '@linaria/react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

const Container = styled.div`
  height: 92px;
  outline: none;
  position: relative;
  list-style: none;
  cursor: pointer;
  flex: 1 1 33.33%;
  border-right: 1px solid rgb(244, 244, 244);
  &:hover{
    background-color: rgb(244, 244, 244);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 10px 0px;
  }
`

const Link = styled.a`
  background-size: cover;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 15px 0px;
  margin-right: -1px;
  display: flex;
`

const Content = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  .title {
    color: rgb(34, 34, 34);
    line-height: 1.33;
    font-size: 18px;
    margin-bottom: 4px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
  }
  .subText {
    color: rgb(155, 155, 155);
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
  }
`

const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  flex-basis: 30%;
  out-line: none;
  user-select: none;
`


const DropdownContainer = styled.div`
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
  <DropdownContainer>
    {
      items.map(({ href, text }) => (
        <a href={href}>
          {text}
        </a>
      ))
    }
  </DropdownContainer>
)

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
}

const CategorySelect = ({ icon, title, subText, href, items }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <Container
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <Link href={href}>
        <Image src={icon} />
        <Content>
          <span className='title'>
            {title}
          </span>
          <span className='subText'>
            {parse(subText)}
          </span>
        </Content>
      </Link>
      {toggle && items.length > 0 && <Dropdown items={items} />}
    </Container>
  )
}

CategorySelect.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  subText: PropTypes.string,
  items: PropTypes.array,
}

CategorySelect.defaultProps = {
  subText: '',
  items: [],
}

export default CategorySelect
