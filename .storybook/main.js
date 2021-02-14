const path = require('path')

module.exports = {
  // Point at your stories
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // Handle SCSS modules
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../src/styles'),
              path.resolve(__dirname, '../node_modules'),
            ],
          },
        },
      },
    },
  ],
  webpackFinal: async (baseConfig) => {
    // Resolve aliases used in project
    baseConfig.resolve.alias = {
      '@': path.resolve(__dirname, '../src/'),
    };
    // Needed for SVG importing using svgr
    const indexOfRuleToRemove = baseConfig.module.rules.findIndex((rule) =>
      rule.test.toString().includes('svg')
    )
    baseConfig.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false,
      },
    })
    baseConfig.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    })

    // Append linaria loader to extract CSS from components
    baseConfig.module.rules.push({
      test: /\.js|jsx$/,
      loader: 'linaria/loader',
      options: {
        sourceMap: true,
      },
      exclude: /node_modules/,
    });

    // Merge your next webpack config with this base
    return baseConfig
  },
}
