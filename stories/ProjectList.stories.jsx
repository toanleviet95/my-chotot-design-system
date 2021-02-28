import { styled } from '@linaria/react'
import ProjectList from '@/components/ProjectList'
import { projects, pages, news, settings } from './mocks/projects.mock'

export default {
  title: 'Components/Project List',
};

const Container = styled.div`
  width: 970px;
  margin: 0 auto;
`

const Template = (args) => <Container><ProjectList {...args} /></Container>

export const Project = Template.bind({});
Project.args = {
  data: projects,
  settings,
}


export const Page = Template.bind({});
Page.args = {
  data: pages,
  settings,
}

export const News = Template.bind({});
News.args = {
  data: news,
  settings,
}
