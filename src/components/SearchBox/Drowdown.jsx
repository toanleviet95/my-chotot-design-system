import { useState } from 'react'
import { styled } from '@linaria/react'
import Icon from '../Icon'

const Container = styled.div`
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

function Drowdown() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Container onClick={handleToggle}>
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
    </Container>
  )
}

export default Drowdown
