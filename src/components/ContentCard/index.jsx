import { styled } from '@linaria/react'
import PropTypes from 'prop-types'

const Container = styled.div`
  background: rgb(255, 255, 255);
  padding: 12px 0px 0px;
`

const Title = styled.h1`
  font-size: 17px;
  margin: 0px 0px 12px 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  color: rgb(34, 34, 34);
`

const Content = styled.div`
  border-top: 1px solid rgb(244, 244, 244);
  display: flex;
`

const ContentCard = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      {children}
    </Content>
  </Container>
)

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default ContentCard
