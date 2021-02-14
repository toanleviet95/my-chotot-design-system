import { styled } from '@linaria/react'
import Logo from '../Logo'
import SearchBox from '../SearchBox'

export const Header = styled.header`
  font-family: Helvetica, Arial, sans-serif;
  position: sticky;
  background-color: rgb(255, 186, 0);
  border-color: rgb(255, 161, 0);
  top: 0px;
  width: 100%;
  font-size: 14px;
  z-index: 1000;
  user-select: none;
  transition-property: height;
  transition-duration: 0.1s;
  display: block;
  div {
    font-size: 14px;
  }
`

export const Panel = styled.div`
  width: 936px;
  display: flex;
  min-width: 320px;
  margin: 0 auto;
`

const LeftPanel = styled.div`
  flex: 0.3 1 auto;
  justify-content: flex-start;
`

const RightPanel = styled.div`
  flex: 0.7 0 auto;
  justify-content: flex-end;
`

const WrapSubPanel = styled.div`
  height: 48px;
`

const SubPanel = styled.div`
  width: 936px;
  height: 36px;
  margin: 0px auto;
  display: flex;
  top: 50px;
  transition-property: top;
  transition-duration: 0.5s;
`

const SubPanelWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const SearchBoxWrap = styled.div`
  width: 100%;
  display: inline-flex;
`

function Nav() {
  return (
    <Header>
      <Panel>
        <LeftPanel>
          <Logo
            href='https://chotot.com'
            src='https://static.chotot.com/storage/marketplace/nha_white_logo.png'
            alt='Chợ Tốt'
          />
        </LeftPanel>
        <RightPanel />
      </Panel>
      <WrapSubPanel>
        <SubPanel>
          <SubPanelWrap>
            <SearchBoxWrap>
              <SearchBox />
            </SearchBoxWrap>
          </SubPanelWrap>
        </SubPanel>
      </WrapSubPanel>
    </Header>
  )
}

export default Nav
