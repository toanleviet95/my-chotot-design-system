import CategorySelect from '@/components/CategorySelect'
import { styled } from '@linaria/react'

export default {
  title: 'Components/Category Select',
};

const Container = styled.div`
  width: 360px;
`

const Template = (args) => <Container><CategorySelect {...args} /></Container>

export const Default = Template.bind({});
Default.args = {
  icon: 'https://static.chotot.com/storage/default/pty/cat-1.svg',
  title: 'Mua bán',
  href: 'https://nha.chotot.com/toan-quoc/mua-ban-bat-dong-san',
  subText: '<b>360.931</b> tin đăng mua bán',
  items: [
    {
      text: 'Căn hộ chung cư',
      href: 'https://nha.chotot.com/toan-quoc/mua-ban-can-ho-chung-cu',
    },
    {
      text: 'Nhà ở',
      href: 'https://nha.chotot.com/toan-quoc/mua-ban-nha-dat',
    }
  ]
}
