import Footer from '@/components/Footer'

export default {
  title: 'Components/Footer',
};


const Template = (args) => <Footer {...args} />

export const Default = Template.bind({});
Default.args = {
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
