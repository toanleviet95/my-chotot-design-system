import { styled } from '@linaria/react'
import Dropdown from './Drowdown'
import AutoComplete from './AutoComplete'

const Container = styled.div`
  display: flex;
  margin: 0px auto;
  background: rgb(255, 255, 255);
  border-radius: 5px;
  position: relative;
  width: 100%;
`

function SearchBox() {
  return (
    <Container>
      <Dropdown />
      <AutoComplete />
    </Container>
  )
}

export default SearchBox
