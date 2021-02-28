import Icon from '@/components/Icon'
import { styled } from '@linaria/react'
import icons from './mocks/icons.mock'

export default {
  title: 'Components/Icon',
};

const Container = styled.div`
  padding: 12px;
  margin: auto;
  width: 600px;
  display: flex;
  justify-content: space-between;
  div {
    text-align: center;
  }
`

const Template = () => (
  <Container>
    {
      icons.map(({icon, name}) => (
        <div key={name}>
          <Icon type={icon} />
          <div>
            {name}
          </div>
        </div>
      ))
    }
  </Container>
)

export const Icons = Template.bind({});
