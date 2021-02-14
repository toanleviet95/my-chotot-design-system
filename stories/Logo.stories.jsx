import Logo from '@/components/Logo'
import { styled } from '@linaria/react'

export default {
  title: 'Components/Navbar/Logo',
};

const Container = styled.div`
  background: rgb(255, 186, 0);
  text-align: center;
  width: 125px;
  margin: auto;
`

const Template = (args) => <Container><Logo {...args} /></Container>

export const Default = Template.bind({});
Default.args = {
  href: 'https://chotot.com',
  src: 'https://static.chotot.com/storage/marketplace/nha_white_logo.png',
  alt: 'Chợ Tốt',
}
