import ContentCard from '@/components/ContentCard'

export default {
  title: 'Components/Content Card',
};

const Template = (args) => <ContentCard {...args}>Nội dung</ContentCard>

export const Default = Template.bind({});
Default.args = {
  title: 'Khám phá danh mục Bất động sản',
}
