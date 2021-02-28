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
  <img src="https://raw.githubusercontent.com/react-theming/storybook-addon-material-ui/master/docs/logos/Storybook.png" width="10%" />
  &nbsp;
  <img src="https://travis-ci.com/images/logos/TravisCI-Mascot-1.png" width="10%" />
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
- [TravisCI][travis-ci] - Test and deploy

## 📦 Install

```bash
npm install my-chotot-design-system
```

```bash
yarn add my-chotot-design-system
```

## 🔨 Usage

```jsx
import { Button, DatePicker } from 'my-chotot-design-system';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
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
[travis-ci]: https://travis-ci.org
