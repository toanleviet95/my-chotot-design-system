import SearchBox from '@/components/SearchBox'
import { styled } from '@linaria/react'
import {
  Header,
  Panel
} from '@/components/Nav'

const Container = styled.div`
  padding: 8px 0;
  width: 100%;
`

export default {
  title: 'Components/Navbar/SearchBox',
};

export const Default = () => (
  <Header>
    <Panel>
      <Container>
        <SearchBox />
      </Container>
    </Panel>
  </Header>
)
