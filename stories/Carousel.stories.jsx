import Carousel from '@/components/Carousel'
import { styled } from '@linaria/react'

export default {
  title: 'Components/Carousel',
};

const Container = styled.div`
  max-width: 960px;
  padding: 12px;
  margin: 0px auto;
`

const Template = (args) => <Container><Carousel {...args} /></Container>

export const Default = Template.bind({});
Default.args = {
  images: [
    {
      src: 'https://tpc.googlesyndication.com/simgad/11873678284497377944',
      alt: 'image 1',
      href: '',
    },
    {
      src: 'https://tpc.googlesyndication.com/simgad/4031500640883312282',
      alt: 'image 2',
      href: '',
    },
    {
      src: 'https://tpc.googlesyndication.com/simgad/11874923039034090262',
      alt: 'image 3',
      href: '',
    },
  ]
}
