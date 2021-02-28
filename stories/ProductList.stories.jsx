import { styled } from '@linaria/react'
import ProductList from '@/components/ProductList'
import { settings, products } from './mocks/products.mock'

export default {
  title: 'Components/Product List',
};

const Container = styled.div`
  width: 970px;
  margin: 0 auto;
`

const Template = (args) => <Container><ProductList {...args} /></Container>

export const Default = Template.bind({});
Default.args = {
  data: products,
  settings,
}
