import { useState } from 'react'
import { styled } from '@linaria/react'
import Icon from '../Icon'

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  position: relative;
  width: 100%;
`

const AutoCompleteContainer = styled.div`
  border: none;
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  transition-property: width;
  transition-duration: 0.2s;
`

const SearchIconWrap = styled.div`
  right: 8px;
  top: 0px;
  position: absolute;
  width: 100px;
  height: 100%;
  float: right;
  z-index: 1;
`

const SearchBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  width: 22px;
  float: right;
  height: 100%;
  padding: 0px;
  box-shadow: none;
`

const Input = styled.input`
  width: calc(100% - 80px);
  height: 36px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  border: none;
  position: relative;
  padding: 0px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  outline: none;
  color: rgb(34, 34, 34);
  text-indent: 12px;
`


const DropdownContainer = styled.div`
  width: 110px;
  cursor: pointer;
  height: auto;
  box-align: center;
  align-items: center;
  display: flex;
  outline: none;
  z-index: 2;
  flex: 0 0 auto;
`

const Text = styled.div`
  margin: 0px auto;
  color: rgb(34, 34, 34);
`

const IconWrap = styled.div`
  display: flex;
  box-align: center;
  align-items: center;
  height: 100%;
`

const Space = styled.div`
  width: 1px;
  height: 28px;
  padding: 0px 4px;
  border-right: 1px solid rgb(232, 232, 232);
`

const BodyDropwdown = styled.div`
  flex-direction: column;
  width: 105px;
  position: absolute;
  border-radius: 4px;
  top: 42px;
  left: 0px;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 5px 0px;
  background-color: rgb(255, 255, 255);
`

const DropwdownItem = styled.div`
  padding: 12px 5px 12px 12px;
  border-bottom: 1px solid rgb(244, 244, 244);
  display: flex;
`

function Dropdown() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <DropdownContainer onClick={handleToggle}>
      <Text>
        Mua bán
      </Text>
      <IconWrap>
        <Icon type='caret-down' color='#fff' width='12' height='16' />
      </IconWrap>
      <Space />
      {toggle && (
        <BodyDropwdown>
          <DropwdownItem>
            Mua bán
            &nbsp;
            <Icon type='check' color='#FE9900' width='16' height='12' />
          </DropwdownItem>
          <DropwdownItem>
            Cho thuê
          </DropwdownItem>
        </BodyDropwdown>
      )}
    </DropdownContainer>
  )
}

function AutoComplete() {
  return (
    <AutoCompleteContainer>
      <SearchIconWrap>
        <SearchBtn>
          <Icon type='search' color='#FE9900' />
        </SearchBtn>
      </SearchIconWrap>
      <Input type='text' autocomplete='off' placeholder='Bất động sản' />
    </AutoCompleteContainer>
  )
}

function SearchBox() {
  return (
    <Container>
      <Dropdown />
      <AutoComplete />
    </Container>
  )
}

export default SearchBox
