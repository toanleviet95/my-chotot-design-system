import ProductCard from '@/components/ProductCard'
import { styled } from '@linaria/react'

export default {
  title: 'Components/Product Card',
};

const Container = styled.div`
  width: 192px;
`

const Template = (args) => <Container><ProductCard {...args} /></Container>

export const Default = Template.bind({});
Default.args = {
  title: 'Cho thuê phòng trọ mới xây',
  adType: 'user',
  condition: '75m - 2 PN',
  price: '12 triệu/tháng',
  time: '7 phút trước',
  location: 'Hà Nội',
  src: 'https://cdn.chotot.com/9n2H6UDn5s3GePX82SNGtL_ouil-kBZj59O6N6PXSNs/preset:listing/plain/e8845e28c27490de7dd988eee7a70490-2714350373056985016.jpg',
  href: 'https://nha.chotot.com/tp-ho-chi-minh/quan-tan-binh/thue-can-ho-chung-cu/79232897.htm',
  alt: 'Sky Center Phổ Quang Tân Bình Cho Thuê 2PN FNT',
  numImages: 6,
  isHotCard: true,
  isBestPrice: true,
}
