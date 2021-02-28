import { styled } from '@linaria/react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: block;
  background-color: #ffff;
  border-top: 10px solid #f4f4f4;
  font-size: 12px;
  width: 100%;
  text-align: center;
  padding: 20px 0;
`

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  font-size: 14px;
`

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 12px;
`

const Heading = styled.p`
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #15181f;
  text-transform: uppercase;
  text-align: left;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  text-align: left;
  div {
    padding-right: 12px;
  }
`

const QrCode = styled.img`
  width: 87px;
  height: 87px;
  border-style: none;
`

const coverList = {
  'list-style-type': 'none',
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  flexDirection: 'column',
  textAlign: 'left',
}

const List = styled.ul`
  ${coverList}
`

const ListItem = styled.li`
  margin-right: 16px;
  font-size: 14px;
  line-height: 1.29;
  padding: 0;
  margin-bottom: 12px;
  a {
    color: #4a4a4a;
    text-decoration: none;
  }
  img {
    border-style: none;
  }
  .icon {
    border-style: none;
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 5px;
  }
`

const Authorization = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  text-align: left;
`

const SocialList = styled.div`
  ${coverList}
  flex-direction: row;
  width: 100px;
`

const Divider = styled.hr`
  border-top: 1px solid #f4f4f4;
  box-sizing: content-box;
  height: 0px;
  overflow: visible;
`

const BottomSection = styled.div`
  margin-top: 20px;
  address {
    color: #9b9b9b;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
  }
`

const Footer = ({ qrCode, appleLink, androidLink, supportLinks, aboutLinks, socialLinks, authorLink, addressInfo }) => (
  <Wrapper>
    <Container>
      <GridSection>
        <div>
          <Heading>
            Tải ứng dụng chợ tốt
          </Heading>
          <FlexRow>
            <div>
              <QrCode src={qrCode} alt='Chợ Tốt' />
            </div>
            <div>
              <List>
                <ListItem>
                  <a href={appleLink} target='_blank' rel='noopener noreferrer'>
                    <img alt='App Store' width='94' height='32' src='https://static.chotot.com/storage/default/ios.svg' />
                  </a>
                </ListItem>
                <ListItem>
                  <a href={androidLink} target='_blank' rel='noopener noreferrer'>
                    <img alt='Google Play' width='94' height='32' src='https://static.chotot.com/storage/default/android.svg' />
                  </a>
                </ListItem>
              </List>
            </div>
          </FlexRow>
        </div>
        <div>
          <Heading>
            Hỗ trợ khách hàng
          </Heading>
          <List>
            {supportLinks.map(item => (
              <ListItem key={item.text}>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  {item.text}
                </a>
              </ListItem>
              )
            )}
          </List>
        </div>
        <div>
          <Heading>
            Về chợ tốt
          </Heading>
          <List>
            {aboutLinks.map(item => (
              <ListItem key={item.text}>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  {item.text}
                </a>
              </ListItem>
              )
            )}
          </List>
        </div>
        <Authorization>
          <div>
            <Heading>
              Liên kết
            </Heading>
            <SocialList>
              {socialLinks.map(item => (
                <ListItem key={item.link}>
                  <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    <img className='icon' alt='Facebook' width='32' height='32' src={item.img} />
                  </a>
                </ListItem>
              ))}
            </SocialList>
          </div>
          <div>
            <Heading>
              Chứng nhận
            </Heading>
            <List>
              <ListItem>
                <a target='_blank' rel='noopener noreferrer' href={authorLink}>
                  <img alt='Certification' width='130' height='40' src='https://static.chotot.com/storage/default/cerfiticate.png' />
                </a>
              </ListItem>
            </List>
          </div>
        </Authorization>
      </GridSection>
    </Container>
    <Divider />
    <BottomSection>
      <address>
        {parse(addressInfo)}
      </address>
    </BottomSection>
  </Wrapper>
)

Footer.propTypes = {
  qrCode: PropTypes.string,
  appleLink: PropTypes.string,
  androidLink: PropTypes.string,
  supportLinks: PropTypes.array,
  aboutLinks: PropTypes.array,
  socialLinks: PropTypes.array,
  authorLink: PropTypes.string,
  addressInfo: PropTypes.string,
}

Footer.defaultProps = {
  qrCode: 'https://static.chotot.com/storage/default/group-qr.jpeg',
  appleLink: 'https://itunes.apple.com/us/app/chotot.vn/id790034666',
  androidLink: 'https://play.google.com/store/apps/details?id=com.chotot.vn',
  supportLinks: [
    {
      text: 'Trung tâm trợ giúp',
      link: 'https://trogiup.chotot.com',
    },
    {
      text: 'An toàn mua bán',
      link: 'https://trogiup.chotot.com/mua-ban-an-toan',
    },
    {
      text: 'Quy định cần biết',
      link: 'https://trogiup.chotot.com/nguoi-ban/hoat-dong',
    },
    {
      text: 'Quy chế quyền riêng tư',
      link: 'https://trogiup.chotot.com/nguoi-ban/rieng-tu',
    },
    {
      text: 'Liên hệ hỗ trợ',
      link: 'https://trogiup.chotot.com/lien-he',
    },
  ],
  aboutLinks: [
    {
      text: 'Giới thiệu',
      link: 'https://trogiup.chotot.com/quy-dinh/gioi-thieu-chotot-com',
    },
    {
      text: 'Tuyển dụng',
      link: 'https://careers.chotot.com',
    },
    {
      text: 'Truyền thông',
      link: 'https://truyenthong.chotot.com',
    },
    {
      text: 'Blog',
      link: 'https://chotot.com/kinhnghiem',
    },
  ],
  socialLinks: [
    {
      img: 'https://static.chotot.com/storage/default/facebook.svg',
      link: 'https://www.facebook.com/chotot.vn',
    },
    {
      img: 'https://static.chotot.com/storage/default/youtube.svg',
      link: 'https://www.youtube.com/ChototVN',
    },
    {
      img: 'https://static.chotot.com/storage/default/google.svg',
      link: 'https://plus.google.com/112159203362880782068',
    },
  ],
  authorLink: 'http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=33127',
  addressInfo: `
    CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh
    <br />
    Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 11/01/2013
    <br />
    Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041
  `,
}

export default Footer
