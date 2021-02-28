const projectProps = {
  title: 'Vinhomes Grand Park',
  adType: 'project',
  price: '14.7 - 44.4 triệu/m²',
  src: 'https://cdn.chotot.com/-mrVeMCAcn-yB5G4vKjgYgcpCm8OfOIuE-O3W4jn5OY/preset:property_project_default/plain/1317_overview_1.jpg',
  href: 'https://nha.chotot.com/du-an/mua-ban-vinhomes-grand-park-vincity-quan-9-quan-9-2064367520',
  alt: 'Vinhomes Grand Park',
  address: 'Quận 9, Tp Hồ Chí Minh',
}

const pageProps = {
  title: 'VnaHomes',
  adType: 'page',
  condition: 'VnaHomes - Hệ Thống Quản Lý Vận Hành Cho Thuê Căn Hộ',
  src: 'https://cdn.chotot.com/e2857Gqgk3sTzKStraAUW7eEEAvOz-KIRq7sbEHCJBc/preset:shopcover/plain/3c41f776b6c88d2017a5c988df5d924d-2668723585087137358.jpg',
  href: 'https://nha.chotot.com/chuyen-trang/vna-homes',
  alt: 'VnaHomes',
  address: 'Phố Đội Cấn, Quận Ba Đình, Hanoi Vietnam',
  avatar: 'https://tpc.googlesyndication.com/simgad/7986437991659865170',
}

const newsProps = {
  title: 'Tình hình giá đất Quận 12 ở thời điểm hiện tại?',
  adType: 'news',
  condition: 'Trong chương trình Radio Chợ Tốt Cuối Tuần lần này, bạn hãy cùng Chợ Tốt Nhà tìm hiểu về tình hình giá đất quận 12 cùng các vấn đề xoay quanh nhé!',
  src: 'https://cdn.chotot.com/e2857Gqgk3sTzKStraAUW7eEEAvOz-KIRq7sbEHCJBc/preset:shopcover/plain/3c41f776b6c88d2017a5c988df5d924d-2668723585087137358.jpg',
  href: 'https://nha.chotot.com/kinh-nghiem/tinh-hinh-gia-dat-quan-12-o-thoi-diem-hien-tai.html',
  alt: 'Tình hình giá đất Quận 12 ở thời điểm hiện tại?',
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  initialSlide: 0,
}

const projects = [...Array(10).keys()].map(i => ({ id: i, ...projectProps }))

const pages = [...Array(10).keys()].map(i => ({ id: i, ...pageProps }))

const news = [...Array(10).keys()].map(i => ({ id: i, ...newsProps }))

export {
  projects,
  pages,
  news,
  settings,
};
