const path = require("path");

module.exports = {
  webpackFinal: async (config) => {
    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));
    assetRule.exclude = /\.svg$/;
    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query
    };

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader]
    });
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
  },

  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ['@storybook/addon-essentials',
    'storybook-addon-material-ui']
}
