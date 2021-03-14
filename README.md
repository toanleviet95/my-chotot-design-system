# My Chotot Design System

<div align="center">
  <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" width="10%" />
  &nbsp;
  <img src="https://github.com/webpack/media/blob/master/logo/icon-square-big.svg" width="10%" />
  &nbsp;
  <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" width="20%" />
  &nbsp;
  <img src="https://eslint.org/assets/img/logo.svg" width="10%" />
  &nbsp;
  <img src="https://seeklogo.com/images/S/stylelint-logo-631B4EAA36-seeklogo.com.png" width="10%" />
   &nbsp;
  <img src="https://raw.githubusercontent.com/react-theming/storybook-addon-material-ui/master/docs/logos/Storybook.png" width="8%" />
</div>

### Link demo
http://my-cho-tot.surge.sh/

### Tech Stack
- [React][reactjs] - Library for building user interfaces
- [Webpack][webpack] - Bundle and dev server
- [Babel][babeljs] - Compiling JS
- [ESlint][eslint] - The pluggable linting utility for JS and JSX
- [Stylelint][stylelint] - Linter that helps you avoid errors and enforce conventions in your styles
- [Storybook][storybook] - Tool for developing UI components

## 📦 Install

```bash
npm install my-chotot-design-system
```

```bash
yarn add my-chotot-design-system
```

## 🔨 Usage

```jsx
import { ProductCard } from 'my-chotot-design-system';

const App = () => (
  <>
    <ProductCard
      adType="user"
      alt="Sky Center Phổ Quang Tân Bình Cho Thuê 2PN FNT"
      condition="75m - 2 PN"
      href="https://nha.chotot.com/tp-ho-chi-minh/quan-tan-binh/thue-can-ho-chung-cu/79232897.htm"
      isBestPrice
      isHotCard
      location="Hà Nội"
      numImages={6}
      price="12 triệu/tháng"
      src="https://cdn.chotot.com/QIwA5B_B5fBk39Kpb_2tPCw8RcPFwUbncOMDtEK09t4/preset:listing/plain/00b502d729a6fc50efcd09cbf7d3f711-2692465108042704753.jpg"
      time="7 phút trước"
      title="Cho thuê phòng trọ mới xây"
    />
  </>
);
```
And import style manually:

```jsx
import 'my-chotot-design-system/dist/styles.css';
```

[reactjs]: https://reactjs.org
[babeljs]: https://babeljs.io
[webpack]: https://webpack.js.org
[eslint]: https://eslint.org
[stylelint]: https://stylelint.io
[storybook]: https://storybook.js.org
