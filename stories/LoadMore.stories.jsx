import LoadMore from '@/components/LoadMore'

export default {
  title: 'Components/Load More',
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <LoadMore {...args} />

export const Default = Template.bind({});
Default.args = {
  text: 'Xem thêm 319.673 tin khác',
}
