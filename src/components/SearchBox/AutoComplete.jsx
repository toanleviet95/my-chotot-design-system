import { styled } from '@linaria/react'
import Icon from '../Icon'

const Container = styled.div`
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

function AutoComplete() {
  return (
    <Container>
      <SearchIconWrap>
        <SearchBtn>
          <Icon type='search' color='#FE9900' />
        </SearchBtn>
      </SearchIconWrap>
      <Input type='text' autocomplete='off' placeholder='Bất động sản' />
    </Container>
  )
}

export default AutoComplete
